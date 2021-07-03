import React, { useState } from 'react';
import { connect } from 'react-redux'
import { deleteTodo, doneTodo, testedTodo, progressTodo } from '../actions'
import '../style.css';

const List = (props) => {
    const [empt, setempt] = useState('')
    return (
        <div>
            <ul>
                {props.todos
                    .filter(item => item.done === false && item.tested === false && item.progress === false)
                    .map((todo, index) => (
                        <li key={index}> {todo.message}

                            <button class="button button2" onClick={() => { props.dispatch(deleteTodo(todo.id)) }}>Delete</button>

                            <button class="button button2" onClick={() => {
                                props.dispatch(doneTodo(todo.id))
                            }}>Done</button>

                            <button class="button button2" onClick={() => {
                                props.dispatch(testedTodo(todo.id))
                            }}>Tested</button>

                            <button class="button button2" onClick={() => {
                                props.dispatch(progressTodo(todo.id))
                            }}>Progress</button>
                        </li>

                    ))}
            </ul>

        </div>
    )
}

const StatetoProps = (state) => ({
    todos: state.todos.data,
})
export default connect(StatetoProps)(List)
