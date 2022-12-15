import axios from "axios";
import { BASE_URL } from "../../api/urls";

const request = () => {
    return { type: "REQUEST_GET" }
}

const successFully = data => {
    return { type: 'SUCCESS_REQUEST' , payload: data }
}

const failedRequest = errorMsg => {
    return { type: 'FAILED' , payload: errorMsg }
}

const fetchOrderHistory = (userId) => {
    return (dispatch) => {
        const ls = localStorage.getItem("userToken");
        if(ls !== null ) {
            dispatch(request())
            const token = JSON.parse(ls).token;
            axios.defaults.headers.get['Authorization'] = `Bearer ${token}`;
            axios(`${BASE_URL}api/v1/Basket/GetOrderHistory?UserId=${userId}`)
                .then(res => {
                    dispatch(successFully(res.data.data))
                })
                .catch(err => dispatch(failedRequest(err)))
        }
    }
}

export { fetchOrderHistory }