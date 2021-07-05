import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux'
import { addTodo } from '../actions'
import './css/form.css';

const AddTodo = (props) => {
    // useEffect(() => {
    //     if (props.auth[0]) {
    //         return true
    //     } else { props.history.push("/Error") };
    // });

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
            <p className='emp'>{emp}</p>
            <div className='input-group'>
                <input type="text" name="username" />

                <button className='s-button'>Submit</button>
            </div>


        </form>
    </>
    )
}

export default connect()(AddTodo);