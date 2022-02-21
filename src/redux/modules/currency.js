const moduleName = 'currency'

// Types of actions
const GET_CURRENCY = `${moduleName}/GET_CURRENCY`


// State
const defaultState = {
    // array of currencys
    currency: [],
}

// Reducer
export default (state = defaultState, { type, info }) => {
    switch (type) {
        case GET_CURRENCY:
            return { ...state, currency: info}
        default:
            return state
    }
}

// Action-creator

export const getCurrency = () => async (dispatch) => {
    try {
        await fetch('https://api.privatbank.ua/p24api/pubinfo?json&exchange&coursid=5')
        // get data in json with API of PrivatBank
        .then((response) => response.json())
        // sent our data to reducer
        .then((data) => dispatch({ type: GET_CURRENCY, info: data }))

    } catch (error) {
        console.log(error);
    }
}