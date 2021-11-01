const initialState = {
    user: [],
    error: null
}

const Reducer = (state = initialState, action) => {
    switch (action.type) {
        case "GET_USER_DATA":
            var arr = [];
            for (let key in action.payload) {
                arr.push(action.payload[key])
            }
            var historyArr = [];
            for(let i=0;i<arr.length;i++){
                const history = Object.values(arr[i].history)
                historyArr.push(history)
            }
            for(let i=0;i<arr.length;i++){
                arr[i] = {...arr[i],history :historyArr[i] }
            }
            return {
                ...state,
                user: arr,
            }
            case "GET_USER_DATA_FAILED":
                return {
                    ...state,
                    error: action.payload,
                }
                default:
                    return state
    }
}

export default Reducer;