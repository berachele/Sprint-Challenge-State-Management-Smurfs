import React from "react"
import {connect} from "react-redux"
import {addSmurf} from "../store/actions/smurfActions"

const SmurfVillage = props => {

    return(
        <div className="village">
            <header>
                <h1>Welcome to our Smurf Village!</h1>
            </header>
            <h2>Our village is lonely, let's add more Smurfs!</h2>
            {/* {props.smurf && <p>{props.smurf}</p>} */} 
            <label htmlFor="addName"><input id="addName" name="addName" placeholder="Name"/></label> &nbsp;
            <label htmlFor="addAge"><input id="addAge" name="addAge" placeholder="Age"/></label> &nbsp;
            <label htmlFor="addHeight"><input id="addHeight" name="addHeight" placeholder="Height"/></label> &nbsp;
            <button>Add Smurf!</button>
        </div>
    )
}


//mSTP
//eventually connect to actions
export default SmurfVillage