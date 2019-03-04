import axios from 'axios';
export const FETCHING = 'FETCHING';
export const FETCHED = 'FETCHED';
export const ERROR = 'ERROR';

 export const fetchStocks = () => {
    return dispatch => {
        dispatch({ type: FETCHING });
        axios
        .get('https://www.alphavantage.co/query?function=TIME_SERIES_INTRADAY&symbol=AMZN&interval=5min&apikey=MRYZL6KHH9MMJYIF')
        .then(response => {
            dispatch({
                type: FETCHED, payload: response.data['Time Series (5min)']
            })
        })
        .catch(error => {
            dispatch({ type: ERROR, payload: 'There was an error retrieving your stock information' });
            console.log(error)
        })
    }
}