import React, { useState } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { Button } from "reactstrap";
import '../Search/Search.css'

const Serach = (props) => {

    const [search, setSearch] = useState('');
    const [kp, setkp] = useState('')

    return (
        <>
            <nav className="navbar navbar-expand-sm bg-warning navbar-dark ">
                <div className="serch">
                    <form className="form-inline d-flex dropdown" action="/action_page.php">

                        <h2> TODO APP</h2>
                        <div className='search_div'>
                            <input
                                type="text"
                                placeholder="Search Your Todo"
                                value={search}
                                className="ser_text"
                                onChange={(e) => setSearch(e.target.value)} />

                            <Link to="/">
                                <button className='sear_button'>Logout</button>
                            </Link> {
                                props.todos
                                    .filter(item => item.message.toLowerCase().includes(search.toLowerCase()))
                                    .map(item => search.length === 0 ? kp : <li className='s_text' key={item.id}>{item.message}</li>)
                            }
                        </div>

                    </form>
                </div>
            </nav>
            {/* <div className="serch dropdown-content">
                {
                    props.todos
                        .filter(item => item.message.toLowerCase().includes(search.toLowerCase()))
                        .map(item => search.length === 0 ? kp : <li className='s_text' key={item.id}>{item.message}</li>)
                }

            </div> */}
        </>
    )
}

const StatetoProps = (state) => ({
    todos: state.todos.data,
})
export default connect(StatetoProps)(Serach)