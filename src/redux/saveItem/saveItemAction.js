import axios from "axios"
import { BASE_URL } from "../../api/urls"
import callApi from "../../api/callApi"
import { notify } from "../../tools/toast/toast";
import { Co2Sharp } from "@mui/icons-material";
if (typeof window !== "undefined") {
    var ls = localStorage.getItem("userToken");
}
const addToFavorite = data => {
    return {type: 'ADD_PRODUCT', payload: data}
}

const checkSavedItem = (userId) => {

    const userToken = JSON.parse(ls);
    var token = userToken.token;
  

    return (dispatch) => {
        axios.defaults.headers.get['Authorization'] = `Bearer ${token}`;
        
        axios(`${BASE_URL}api/v1/User/FavoriteList?UserId=${userId}`)
            .then(res => res.status === 200 &&  dispatch(addToFavorite(res.data.data)))
            .catch(err => console.log("error"))
        
    }
}

const fetchingToSave = (userId, productId) => {
    return (dispatch) => {
        var ls = localStorage.getItem("userToken");
        const userToken = JSON.parse(ls);
        var token = userToken.token;
        axios.defaults.headers.post['Authorization'] = `Bearer ${token}`;

        axios.post(`${BASE_URL}api/v1/User/AddToFavoriteList?UserId=${userId}&ProductId=${productId}`)
            .then(res => {
                dispatch(checkSavedItem(userId));
                res.data.code === 200 && notify("Saved", "success");
            })
            .catch(err => console.log("error"))
    }
}

const removeItem = (idItem, user) => {
    return (dispatch) => {
        console.log(idItem);
        var ls = localStorage.getItem("userToken");
        const userToken = JSON.parse(ls);
        var token = userToken.token;
        axios.defaults.headers.post['Authorization'] = `Bearer ${token}`;

        axios.post(`${BASE_URL}api/v1/User/RemoveFromFavoriteList?id=${idItem}`)
            .then(res => {
                console.log(res)
                res.status === 200 && dispatch(checkSavedItem(user))
            })
            .catch(err => console.log("err"))
    }
}

export { fetchingToSave, checkSavedItem, removeItem }