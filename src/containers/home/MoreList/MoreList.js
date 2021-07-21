import React from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom';
import { deleteTodo, doneTodo } from './../../../actions/index'

import { Card, CardBody, CardText, Button } from "reactstrap";
import '../MoreList/Morelist.css'

const MoreList = (props) => {

    return (<>
        <div className="container"><br /><br />
            <h2 className="text-dark fontlist2">  My TODO List</h2>
            <br />
            <div className="row">
                <div className="col">
                    <div className="card cardss" >
                        <div className="card-body d_task">
                            <h3 className="card-title tt ">Done Task</h3>
                            <p className="card-text">{props.todos
                                .filter(item => item.done === true)
                                .map(item => (<>
                                    <div className="col cardss smlist ">
                                        <div className="card cardx  " >
                                            <li className="md_text shadow p-2 bg-white rounded " key={item.id}>{item.message}</li>

                                            {/* <li className='md_text' key={item.id}>{item.message}</li>*/}
                                        </div></div>
                                </>
                                )

                                )}</p>
                        </div>
                    </div>
                </div>
                <div className="col">
                    <div className="card cardss" >
                        <div className="card-body d_task">
                            <h3 className="card-title tt ">Tested Tasks</h3>
                            <p className="card-text"> {props.todos
                                .filter(item => item.tested === true)
                                .map(item => (<>
                                    <div className="col cardss smtlist ">
                                        <div className="card cardx  " >


                                            <li className="mt_text shadow p-2 bg-white rounded" key={item.id}>{item.message}</li>

                                            {/* <li className='mt_text' key={item.id}>{item.message}</li>*/}
                                        </div></div>
                                </>
                                )

                                )} </p>
                        </div>
                    </div>
                </div>
                <div className="col">
                    <div className="card cardss" >
                        <div className="card-body d_task">
                            <h3 className="card-title tt">Progress Tasks</h3>
                            <p className="card-text"> {props.todos
                                .filter(item => item.progress === true)
                                .map(item =>
                                (<>
                                    <div className="col smplist ">
                                        <div className="card cardss cardx  " >

                                            <li className='mp_text shadow p-2 bg-white rounded' key={item.id}>{item.message}
                                                <button className="pro_button cardss" onClick={() => { props.dispatch(deleteTodo(item.id)) }}>Delete</button>
                                                <button className="pro_button1 cardss" onClick={() => {
                                                    props.dispatch(doneTodo(item.id))
                                                }}>Done</button></li>

                                        </div>
                                    </div></>)
                                )}
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <button className=" btn btn-outline-primary loginb" onClick={() => {
            props.todos.map(e => { props.dispatch(deleteTodo(e.id)) })
        }} >All Reset</button>

        {/* <Link to="/">
            <Button className='loginb '>Logout</Button>
        </Link> */}
    </>
    )
}

const StatetoProps = (state) => ({
    todos: state.todos.data,
})
export default connect(StatetoProps)(MoreList)