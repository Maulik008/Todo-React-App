import React, { useState } from 'react';
import { connect } from 'react-redux'
import { deleteTodo, doneTodo, testedTodo, progressTodo } from '../actions'

const Search = (props) => {

    const [search, setSearch] = useState('')
    const [kp, setkp] = useState('')

    return (

        <div>

            <input
                type="text"
                placeholder="Search Your Todo"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
            />


            {
                props.todos.filter(item => item.tested === false)
                    .filter(item => item.done === false)
                    .filter(item => item.message.toLowerCase().includes(search.toLowerCase()))
                    .map(item => search.length === 0 ? kp : <li key={item.id}>{item.message}                            <button className="button button2" onClick={() => {
                        props.dispatch(doneTodo(item.id))
                    }}>Done</button>

                    </li>)
            }
        </div>
    )
}

const StatetoProps = (state) => ({
    todos: state.todos.data,
})
export default connect(StatetoProps)(Search)