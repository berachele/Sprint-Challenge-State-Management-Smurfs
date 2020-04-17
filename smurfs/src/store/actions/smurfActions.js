//ACTIONS
import axios from "axios"


export const loadSmurf = () => dispatch => {
    dispatch({type: "LOAD_SMURF"})
    axios.get("http://localhost:3333/smurfs")
    .then(res => {
        // console.log("RESP", res.data)
        //I want res.data
        dispatch({type: "LOAD_SMURF_SUCCESS", payload: res.data})
    })
    .catch(err=> {
        // console.log("ERROR", err.response.statusText)
        //err.response.status and statusText
        dispatch({type: "LOAD_SMURF_FAIL", payload: `Error ${err.response.status}: ${err.response.statusText}`})
    })
}

export const addSmurf = input => dispatch => {
    dispatch({type: "ADD_SMURF"})
    axios.post("http://localhost:3333/smurfs", input)
    .then(res => {
        console.log("ADD SMURF RES", res)
    })
    .catch(err => {
        console.log("ADD SMURF ERROR", err)
    })
}