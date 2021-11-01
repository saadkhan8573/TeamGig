import axios from 'axios';

export const getUserData = () => async (dispatch) => {
    
    try {
        const res = await axios.get("http://localhost:5000/api/users")
        // for(var i in res["data"]){
        //     console.log("sdkbvh",i)
        //     console.log(res["data"][i])
        //     arr.push(res["data"][i])
        // }
        
        dispatch({
            type: "GET_USER_DATA",
            payload: res.data
        })
    } catch (err) {
        dispatch({
            type: "GET_USER_DATA_FAILED",
            payload: err
        })
    }
}