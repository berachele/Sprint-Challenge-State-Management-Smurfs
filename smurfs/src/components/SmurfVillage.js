import React, {useState, useEffect} from "react"
import {connect} from "react-redux"
import {loadSmurf} from "../store/actions/smurfActions"

const SmurfVillage = props => {

     //addSmurf here with useEffect --> links to action
    useEffect(()=>{
        props.loadSmurf()
    }, [])

    //state for current smurf
    const [oneSmurf, setSmurf] = useState({
        name: "",
        age:"",
        height:""
    })

    //handleChanges for inputs here
    const handleChanges= event => {
        setSmurf({...oneSmurf, [event.target.name]: event.target.value})
    }
    console.log("PROPS.SMURF", props.smurf)
    return(
        <div className="village">
            <header>
                <h1>Welcome to our Smurf Village!</h1>
            </header>
            <h2>Our village is lonely, let's add more Smurfs!</h2>
            <p>{props.smurf && props.smurf.map(show=> {
                console.log("SHOWING VILLAGE", show)
            return(<p>Name: {show.name}<br/> Age: {show.age}<br/> Height: {show.height}</p>)
            })}</p>
            <label htmlFor="addName"><input id="addName" name="addName" placeholder="Name" value={oneSmurf} onChange={handleChanges} /></label> &nbsp;
            <label htmlFor="addAge"><input id="addAge" name="addAge" placeholder="Age" value={oneSmurf} onChange={handleChanges} /></label> &nbsp;
            <label htmlFor="addHeight"><input id="addHeight" name="addHeight" placeholder="Height" value={oneSmurf} onChange={handleChanges} /></label> &nbsp;
            <button type="submit" >Add Smurf!</button>
        </div>
    )
}


//mSTP
const mapStateToProps = state => {
    console.log("STATE", state)
    return{
        smurf: state.smurfs.smurf,
        error: state.smurfs.state,
        isFetching: state.smurfs.isFetching
    }
}

//eventually connect to actions
export default connect(mapStateToProps, 
    {loadSmurf}
    )(SmurfVillage)