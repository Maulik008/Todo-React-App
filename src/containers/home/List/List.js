import React from 'react'
import { connect } from 'react-redux'
import { deleteTodo, doneTodo, testedTodo, progressTodo } from '../../../actions'
import '../List/List.css'
const List = (props) => {
    return (
        <>
            {props.todos
                .filter(item => item.done === false && item.tested === false && item.progress === false)
                .map((todo, index) => (<>
                    <div className="col slist cardss ">
                        {/* <div className="card cardx my-1 " > */}

                        <li className="my-2 l_text shadow p-2 bg-white rounded" key={index} >{todo.message}
                            {/* <p className='l_text'> {todo.message}</p> */}

                            <button className="button cardss " onClick={() => props.dispatch(progressTodo(todo.id))} >Progress</button>
                            <button className="button1 cardss" onClick={() => props.dispatch(testedTodo(todo.id))} >Tested</button>
                            <button className="button2 cardss" onClick={() => props.dispatch(doneTodo(todo.id))} >Done</button>
                            <button className="button3 cardss" onClick={() => props.dispatch(deleteTodo(todo.id))}> Delete</button>
                        </li>
                    </div>

                </>
                ))}
        </>
    )
}

const mapStatetoProps = (state) => ({
    todos: state.todos.data,
})
export default connect(mapStatetoProps)(List)