import React from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom';
import { deleteTodo, doneTodo } from './../../../actions/index'

import { Card, CardBody, CardText, Button } from "reactstrap";
import '../MoreList/Morelist.css'

const MoreList = (props) => {

    return (<>

        <div className="container">
            <div className="row">
                <div className="col">
                    <div className="card" >
                        <div className="card-body">
                            <h5 className="card-title">Done Task</h5>
                            <p className="card-text">{props.todos
                                .filter(item => item.done === true)
                                .map(item => <li className='md_text' key={item.id}>{item.message}</li>

                                )}</p>
                        </div>
                    </div>
                </div>
                <div className="col">
                    <div className="card" >
                        <div className="card-body">
                            <h5 className="card-title">Tested Tasks</h5>
                            <p className="card-text"> {props.todos
                                .filter(item => item.tested === true)
                                .map(item => <li className='mt_text' key={item.id}>{item.message}</li>)} </p>
                        </div>
                    </div>
                </div>
                <div className="col">
                    <div className="card" >
                        <div className="card-body">
                            <h5 className="card-title">Progress Tasks</h5>
                            <p className="card-text"> {props.todos
                                .filter(item => item.progress === true)
                                .map(item => <li className='mp_text' key={item.id}>{item.message}
                                    <button className="pro_button" onClick={() => { props.dispatch(deleteTodo(item.id)) }}>Delete</button>
                                    <button className="pro_button1" onClick={() => {
                                        props.dispatch(doneTodo(item.id))
                                    }}>Done</button></li>)}
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <button className="  loginb" onClick={() => {
            props.todos.map(e => { props.dispatch(deleteTodo(e.id)) })
        }} >All Reset</button>

        {/* <Link to="/">
            <Button className='loginb'>Logout</Button>
        </Link> */}


    </>
    )
}

const StatetoProps = (state) => ({
    todos: state.todos.data,
})
export default connect(StatetoProps)(MoreList)