import React, { useState } from 'react'
import { connect } from 'react-redux'
import { postSmurf, fetchSmurfs } from '../actions'


const SmurfForm = props => {

    const [formData, setFormData] = useState({
        name: "", age: "", height: ""
    })

    const changeHandler = e => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        })
    }

    const submitHandler = e => {
        e.preventDefault()
        props.postSmurf({ ...formData, id: props.smurfs.length})
        setFormData({
            name: "",
            age: "",
            height: ""
        })
        props.fetchSmurfs()
    }

    return(
        <div>
            <form onSubmit={submitHandler}>
                <input 
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={changeHandler}
                    placeholder="Name"
                />
                <input
                    type="number"
                    name="age"
                    value={formData.age}
                    onCHange={changeHandler}
                    placeholder="Age"

                />
                <input
                    type="text"
                    name="height"
                    value={formData.height}
                    onCHange={changeHandler}
                    placeholder="height"
                />
                <button>Add Smurf</button>
            </form>
        </div>
    )
}

const mapState = state => {
    return {
        smurfs: state.smurfListReducer.smurfs,
        isPosting: state.smurfFormReducer.isPosting,
        error: state.smurfFormReducer.error
    }
}

export default connect(mapState, {postSmurf, fetchSmurfs})(SmurfForm)