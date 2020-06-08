const initialState = {
    smurf: "",
    error: "",
    isFetching: false
}

export const smurfReducer = (state = initialState, action) => {
    switch(action.type){
        case "LOAD_SMURF":
            return{
                ...state,
                isFetching: true
            }
        case "LOAD_SMURF_SUCCESS":
            return{
                ...state,
                isFetching: false,
                error: "",
                smurf: action.payload.map(show => {
                    return{
                        name: show.name,
                        age: show.age,
                        height: show.height
                    }
                })
            }
        case "LOAD_SMURF_FAILURE":
            return{
                ...state,
                isFetching: false,
                error: action.payload
            }
        case "ADD_SMURF":
            return{
                ...state,
                isFetching: true
            }
        case "ADD_SMURF_SUCCESS":
            return{
                ...state,
                isFetching: false,
                error: "",
                smurf: action.payload
            }
        case "ADD_SMURF_FAILURE":
            return{
                ...state,
                isFetching: false,
                error: action.payload
            }
        default:
            return state
    }
}