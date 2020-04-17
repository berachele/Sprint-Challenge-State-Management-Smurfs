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
        case "SMURF_SUCCESS":
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
        default:
            return state
    }
}