import React from 'react'
import { connect } from 'react-redux'
import { deleteTodo, doneTodo } from '../actions'


const Section = (props) => {
    return (
        < div className="my-5 card-group" >
            <section className="contact ">
                <div className="container ">
                    <h2 className="text-white">  My TODO Section</h2>
                    <div className="row">

                        <div className="my-3  col-4 ">
                            <div className="card ak" style={{
                                width: "18rem"
                            }}>
                                <img
                                    src="https://images.pexels.com/photos/5239917/pexels-photo-5239917.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260"
                                    className="card-img-top"
                                    alt="..."
                                />
                                <div className="card-body">
                                    <h5 className="card-title font-weight-bold">Done Tasks</h5>
                                    <p className="card-text">
                                        <ul>

                                            {props.todos
                                                .filter(item => item.done === true)
                                                .map(item => <li key={item.id}>{item.message}</li>

                                                )}
                                        </ul>
                                    </p>

                                </div>
                            </div>
                        </div>


                        <div className="my-3  col-4 ">
                            <div className="card ck" style={{
                                width: "18rem"
                            }}>
                                <img
                                    src="https://images.pexels.com/photos/6207367/pexels-photo-6207367.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
                                    className="card-img-top"
                                    alt="..."
                                />
                                <div className="card-body">
                                    <h5 className="card-title font-weight-bold">Tested Tasks</h5>
                                    <p className="card-text">
                                        <ul>

                                            {props.todos
                                                .filter(item => item.tested === true)
                                                .map(item => <li key={item.id}>{item.message}</li>)}
                                        </ul>

                                    </p>

                                </div>
                            </div>
                        </div>

                        <div className=" my-3  col-4 ">
                            <div className="card bk" style={{ width: "20rem" }}>
                                <img
                                    src="https://images.pexels.com/photos/5538618/pexels-photo-5538618.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
                                    className="card-img-top"
                                    alt="..."
                                />
                                <div className="card-body">
                                    <h5 className="card-title font-weight-bold">Progress Tasks</h5>
                                    <p className="card-text">
                                        <ul>
                                            {props.todos
                                                .filter(item => item.progress === true)
                                                .map(item => <li key={item.id}>{item.message}
                                                    <button className="button button2" onClick={() => { props.dispatch(deleteTodo(item.id)) }}>Delete</button>
                                                    <button className="button button2" onClick={() => {
                                                        props.dispatch(doneTodo(item.id))
                                                    }}>Done</button></li>)}
                                        </ul>
                                    </p>

                                </div>
                            </div>
                        </div>



                    </div>
                </div>
                <button className=" button button3" onClick={() => {
                    props.todos.map(e => { props.dispatch(deleteTodo(e.id)) })
                }} >All Reset</button>
            </section>
        </div >

    )

}

const StatetoProps = (state) => ({
    todos: state.todos.data,
})
export default connect(StatetoProps)(Section)
