import React, { useState } from 'react';
import { connect } from 'react-redux'
import { addTodo } from '../actions'
import './css/form.css';

const AddTodo = (props) => {
    const [emp, setemp] = useState("");


    return (<>
        <form onSubmit={(e) => {
            e.preventDefault()
            let mb = e.target.username.value
            if (mb === "") {
                setemp("please enter a todo")
            } else {
                console.log(mb)
                props.dispatch(addTodo(mb));
                setemp('')
                e.target.username.value = ""
            }


        }}>

            <h1 className='hh'>Create a To do list</h1>
            <p>{emp}</p>
            <div className='input-group'>
                <input type="text" name="username" />
                <button className='s-button'>Submit</button>
            </div>


        </form>
        {/* <div> <List /></div> */}
    </>
    )
}

export default connect()(AddTodo);