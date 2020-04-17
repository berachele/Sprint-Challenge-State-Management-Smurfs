//ACTIONS
import axios from "axios"

export const loadSmurf = () => dispatch => {
    dispatch({type: "LOAD_SMURF"})
    axios.get("http://localhost:3333/smurfs")
    .then(res => {
        console.log("RESP", res.data)
        //I want res.data
        dispatch({type: "SMURF_SUCCESS", payload: res.data})
    })
    .catch(err=> {
        console.log({err})
    })
}