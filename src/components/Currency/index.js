import { Card } from 'antd';


// Component for Displaying exchange rates in Cards
const Currency = ({ ccy, base_ccy, buy, sale }) => (
 
        <Card>
            <h2>Код валюты: {ccy}</h2>
            <p>Код национальной валюты: {base_ccy}</p>
            <p>Курс покупки: {buy}</p>
            <p>Курс продажи: {sale}</p>
        </Card>
)

export default Currency
