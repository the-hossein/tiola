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

const checkSavedItem = (userId, lang) => {
    return (dispatch) => {
        var ls = localStorage.getItem("userToken");
        if(ls !== null){
            const userToken = JSON.parse(ls);
            var token = userToken.token;
            axios.defaults.headers.get['Authorization'] = `Bearer ${token}`;
            axios(`${BASE_URL}api/v1/User/FavoriteList?UserId=${userId}`)
                .then(res => res.status === 200 &&  dispatch(addToFavorite(res.data.data)))
                .catch(err => console.log("error"))
        }else {
            let textShow ;
            if(lang === 'fa'){
                textShow = "ابتدا وارد حساب کاربری خود بشوید"
            }else {
                textShow = "You did not create an account";
            }
            notify(textShow, "error");
        }
        
    }
}

const fetchingToSave = (userId, productId, lang) => {
    return (dispatch) => {
        
        let textShow; 
        var ls = localStorage.getItem("userToken");
        if(ls !== null ){
            const userToken = JSON.parse(ls);
            var token = userToken.token;
            axios.defaults.headers.post['Authorization'] = `Bearer ${token}`;
    
            axios.post(`${BASE_URL}api/v1/User/AddToFavoriteList?UserId=${userId}&ProductId=${productId}`)
                .then(res => {
                    dispatch(checkSavedItem(userId));
                    if(lang === 'fa') {
                        textShow = "ذخیره شد"
                    }else {
                        textShow = "Saved"
                    }
                    res.data.code === 200 && notify(textShow, "success");
                })
                .catch(err => console.log("error"))
        }else {
            if(lang === 'fa'){
                textShow = "ابتدا وارد حساب کاربری خود بشوید"
            }else {
                textShow = "You did not create an account";
            }
            notify(textShow, "error");
        }

    }
}

const removeItem = (idItem, user) => {
    return (dispatch) => {
        dispatch({type: "REMOVE_PRODUCT"})
        var ls = localStorage.getItem("userToken");
        const userToken = JSON.parse(ls);
        var token = userToken.token;
        axios.defaults.headers.post['Authorization'] = `Bearer ${token}`;

        axios.post(`${BASE_URL}api/v1/User/RemoveFromFavoriteList?id=${idItem}`)
            .then(res => {
                res.status === 200 && dispatch(checkSavedItem(user))
            })
            .catch(err => console.log("err"))
    }
}

export { fetchingToSave, checkSavedItem, removeItem }