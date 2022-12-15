const { default: axios } = require("axios");
import { BASE_URL } from "../../api/urls";

const request = () => {
    return { type: 'FETCHING_REQUEST'}
}

const completed = data => {
    return {type: "COMPLETED_REQUEST", payload: data}
}

const failed = errorMsg => {
    return { type: 'FAILED', payload: errorMsg }
}

const fetchRequestApi = (userId) => {
    return (dispatch) => {
        dispatch(request());
        const userToken = window.localStorage.getItem("userToken");
        const token = JSON.parse(userToken).token;

        axios.defaults.headers.get['Authorization'] = `Bearer ${token}`;
        
        axios.get(`${BASE_URL}api/v1/Basket/CheckExistOpenBaskets?UserId=${userId}`)
            .then(res => {
                if(res.data.code === 200 || res.status === 200) {
                    const data = res.data.data;
                    dispatch(completed(data))
                }
            })
            .catch(err => dispatch(failed(err)))

    }
}

export { fetchRequestApi }