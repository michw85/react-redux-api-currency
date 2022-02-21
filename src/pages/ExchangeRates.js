import React from 'react';
import CurrencyConverter from 'react-currency-conv'


export const ExchangeRates = () => {
    return (
      <>
        <h1>Конвертер валют</h1>
        {/* <div className="CurrencyConverter">
            <CurrencyConverter from={'USD'} to={'CAD'} value={29} precision={2}/>
        </div> */}
      </>
    )
    
}




// import React from 'react';
// import { useEffect } from 'react';
// import { connect } from 'react-redux'

// import { getCurrency as getCurrencyAction} from '../redux/modules/currency'
// import Currency from '../components/Currency/index';


// function ExchangeRates ({ currency, getCurrency }) {

//   useEffect( () => {
//     getCurrency() // = componentDidMount()
//   }, [])  // = componentDidUpdate()

//   return (
//     <div className="ExchangeRate">
//       <div className='Container'> 
//       <h1>Курсы валют</h1>
//         <div className="cardCurrency">
//           {
//             currency.length && currency.map(
//               item => 
//                 <Currency 
//                   key={item.ccy} ccy={item.ccy} base_ccy={item.base_ccy} buy={item.buy} sale={item.sale}
//                 /> 
//             )
//           }
//         </div>
//       </div>
//     </div>
//   )
// }

// export default connect (
//   ({ currency }) => ({ currency: currency.currency }),
//   { getCurrency: getCurrencyAction }
// ) (ExchangeRates)
