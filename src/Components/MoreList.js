import React from 'react'
import { connect } from 'react-redux'
import './css/form.css';
//import { deleteTodo } from '../actions'

const MoreList = (props) => {
    console.log(props)
    return (
        <div>
            <div>
                <h1>Done </h1>

            </div>

            <div>
                <h1>Tested </h1>
            </div>

            <div>
                <h1>Progress </h1>
            </div>

            {/* <ul>
                {props.todos.map((todo, index) => (
                          {/* {todo.message} */}
            {/* <button>Progress</button>
                        <button>R</button>
                        <button>Done</button> */}
            {/* <button onClick={() => props.dispatch(deleteTodo(todo.id))}>
onClick={() => props.dispatch(progressTodo(todo.id))}
                            Delete</button> 
                ))}
            </ul> */}

        </div>
    )
}

const mapStatetoProps = (state) => ({
    todos: state.todos.data,
})
export default connect(mapStatetoProps)(MoreList)