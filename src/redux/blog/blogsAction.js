import axios from "axios"

const result = (data) => {
    return {type: 'FETCH_DATA', payload: data}
};

const error = errMsg => {
    return {type: 'FAILED', payload: errMsg}
}

export const fetchDataBlog = () => {
    return (dispatch) => {
        axios.get("https://jsonplaceholder.typicode.com/posts")
            .then(response =>{ 
                const blog = response.data
                dispatch(result(blog))
            })
            .catch(err => {
                const errMsg = err.message;
                dispatch(error(errMsg));
            })
    }
}