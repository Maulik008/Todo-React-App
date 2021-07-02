import React from 'react';
import { connect } from 'react-redux'
import { addTodo } from '../actions'
import './css/form.css';

const AddTodo = (props) => {

    return (<>
        <form onSubmit={(e) => {
            e.preventDefault()
            let mb = e.target.username.value
            //console.log(mb)
            props.dispatch(addTodo(mb));
            //props.dispatch(authTodo(mb, mb, mb));
            e.target.username.value = ""

        }}><div>
                <h1 className='hh'>Create a To do list</h1>
                <div className='input-group'>
                    <input type="text" name="username" /><button className='s-button'>Submit</button>
                </div>

            </div>
        </form>
        {/* <div> <List /></div> */}
    </>
    )
}

export default connect()(AddTodo);