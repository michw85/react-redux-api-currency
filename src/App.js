import React, { useEffect, useState } from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Form, Card, Button, InputGroup, FormControl } from 'react-bootstrap'
import { connect } from 'react-redux'
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";

import {Home} from './pages/Home'
import {ExchangeRates} from './pages/ExchangeRates'
import NaviBar from './components/Navibar'
import Footer from './components/Footer'

import { getCurrency as getCurrencyAction} from './redux/modules/currency'
import Currency from './components/Currency';


function App({ currency, getCurrency }) {
  // Hook for currency from redux
  useEffect( () => {
    getCurrency() // = componentDidMount()
  }, [])  // = componentDidUpdate()

  // Hooks to get values(state) from select amd input
  const [valueFrom, setValueFrom] = useState(0)
  function onChangeFrom(event) {
    setValueFrom(event.target.value)
  }
  
  const [valueIn, setValueIn] = useState(0)
  function onChangeIn(event) {
    setValueIn(event.target.value)
  }
  
  const [amount, setAmount] = useState(0)
  function onChangeAmount(event) {
    setAmount(event.target.value)
  }
  
  // Result
  const [sum, setSum] = useState(0)
  
  return (
   <>
      <Router>
        <NaviBar />
        
        <Routes>
          <Route exact path="/" element={<Home/>} />
          <Route path="/home" exact element={<Home />}></Route>
          <Route path="/exchangerates" element={<ExchangeRates/>} />
        </Routes>
      </Router>

      <div className="App">
        <div className='Container'> 
            <div className="cardCurrency">
              {
                currency.length && currency.map(
                  item => 
                    <Currency 
                      key={item.ccy} ccy={item.ccy} base_ccy={item.base_ccy} buy={item.buy} sale={item.sale}
                    /> 
                )
              }
            </div>
        </div>
      </div>
      
      <div className='formEchange'>
        <h1>Конвертер валют</h1>
        <Form.Group className="mb-3">
          <h4>Выберите валюты</h4>
              
          <Form.Label>Из какой валюты</Form.Label>
          <Form.Select onChange={onChangeFrom}>
            {currency.map(
              item => 
                <option value={item.sale} key={item.ccy} >
                  {item.ccy}
                </option>
            )}
          </Form.Select>

          <Form.Label>В какую валюту</Form.Label>
          <Form.Select onChange={onChangeIn}>
            {currency.map(
              item => 
                <option value={item.sale} key={item.ccy} >
                  {item.ccy}
                </option>
            )}    
          </Form.Select>
        </Form.Group>

        <Form.Group className="mb-3">
          <InputGroup className="mb-3">
          <InputGroup.Text>Количество</InputGroup.Text>
          <FormControl aria-label="Amount (to the nearest dollar)" placeholder="Кличество денег" onChange={ onChangeAmount }/>
          <InputGroup.Text>.00</InputGroup.Text>
          </InputGroup>
        </Form.Group>

        <Button variant="secondary" onClick={() => setSum(valueFrom/valueIn*amount) }>Конвертировать</Button>
            
        <Card body>Итого: {sum.toFixed(2)} </Card>
      </div>

      <Footer />
   </>
  );
}

export default connect (
  ({ currency }) => ({ currency: currency.currency }),
  {
    getCurrency: getCurrencyAction
  }
  //mapStateToProps
) (App)
