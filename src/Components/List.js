import React from 'react'
import { connect } from 'react-redux'
import { progressTodo } from '../actions'
import { deleteTodo } from '../actions'
import './css/form.css';

const List = (props) => {
    return (
        <div className='list'>
            <ul>
                {props.todos.map((todo, index) => (
                    <li key={index}>
                        {todo.message}
                        <button onClick={() => props.dispatch(progressTodo(todo))}>Progress</button>
                        <button>Tested</button>
                        <button>Done</button>
                        <button onClick={() => props.dispatch(deleteTodo(todo.id))}>

                            Delete</button>



                    </li>
                ))}
            </ul>

        </div>
    )
}

const mapStatetoProps = (state) => ({
    todos: state.todos.data,
})
export default connect(mapStatetoProps)(List)
