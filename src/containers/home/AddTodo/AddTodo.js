import React, { useState } from 'react';
import { connect } from 'react-redux'
import { addTodo } from './../../../actions/index'
import './../AddTodo/Addtodo.css';


const AddTodo = (props) => {

    const [emp, setemp] = useState("");

    return (<>
        <div>
            <form onSubmit={(e) => {
                e.preventDefault()
                let mb = e.target.username.value
                if (mb === "") {
                    setemp("please enter a todo")
                } else {
                    //console.log(mb)
                    props.dispatch(addTodo(mb));
                    setemp('')
                    e.target.username.value = ""
                }
            }}
                className="form-inline " action="/action_page.php">
                <div className="card add " >
                    <div >
                        <h2 className='hh'>Create a To do list</h2>
                        <p className='emp'>{emp}</p>
                        <div className='input-group'>

                            <input type="text" name="username" autoComplete="off" />
                            <button className='s-button btn btn-success '>Submit</button>

                        </div>
                    </div>
                </div>
            </form>

        </div>
    </>
    )
}

export default connect()(AddTodo);