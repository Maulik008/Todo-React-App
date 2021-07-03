import React, { useState } from 'react';
import { connect } from 'react-redux'


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
                props.todos
                    .filter(item => item.message.toLowerCase().includes(search.toLowerCase()))
                    .map(item => search.length === 0 ? kp : <li key={item.id}>{item.message}</li>)
            }
        </div>
    )
}

const StatetoProps = (state) => ({
    todos: state.todos.data,
})
export default connect(StatetoProps)(Search)