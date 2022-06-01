import axios from "axios";
import callApi from "../../api/callApi";
import { BASE_URL, GET_ALL_PRODUCT } from "../../api/urls";

const requestGet = ()=> {
    return {type: 'GET_DATA'}
};

const fetchSuccess = (data) => {
    return {type: 'FETCH_DATA_SUCCESS', payload: data}
}

const failedRequest = (err)=> {
    return {type: 'FAILED_FETCH', payload: err}
}

export const fetchProducts = () => {
    return (dispatch) => {
        dispatch(requestGet());
        axios(BASE_URL+GET_ALL_PRODUCT)
            .then(response => {
                const data = response.data.data;
                // console.log(data)
                dispatch(fetchSuccess(data));
            })
            .catch(error => {
                const errorMsg = error.message;
                dispatch(failedRequest(errorMsg))
            })
    }
}