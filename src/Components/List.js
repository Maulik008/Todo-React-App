import React from 'react'
import { connect } from 'react-redux'
import './css/form.css';
import { deleteTodo, doneTodo, testedTodo, progressTodo } from '../actions'

import './css/form.css';

const List = (props) => {
    return (
        <div className='list'>
            <ul>
                {props.todos
                    .filter(item => item.done === false && item.tested === false && item.progress === false)
                    .map((todo, index) => (
                        <li key={index}>
                            {todo.message}
                            <button className="button" onClick={() => props.dispatch(progressTodo(todo.id))} >Progress</button>
                            <button className="button1" onClick={() => props.dispatch(testedTodo(todo.id))} >Tested</button>
                            <button className="button2" onClick={() => props.dispatch(doneTodo(todo.id))} >Done</button>
                            <button className="button3" onClick={() => props.dispatch(deleteTodo(todo.id))}>

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
