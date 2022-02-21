import { Select } from 'antd';

const { Option } = Select;

function handleChange(currency) {
  console.log(`selected ${currency}`);
}

const SelectCurrency = ({currency}) => (
    <Select defaultValue="select" style={{ width: 120 }} onChange={handleChange}>
        {
                currency.map(
                  item => 
                    <Option 
                      key={item.ccy} value={item.ccy}
                    > {item.ccy}</Option>
                )
              }
    </Select>
)

export default SelectCurrency