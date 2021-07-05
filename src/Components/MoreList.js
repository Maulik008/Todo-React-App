import React from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom';
import './css/form.css';
import { deleteTodo, doneTodo } from '../actions'
import { Card, CardBody, CardText, Button } from "reactstrap";


const MoreList = (props) => {

    return (<>

        <div className=" card-group" >
            <Card>
                <CardBody>
                    <h1>Done Tasks</h1>
                    <CardText>
                        <img src='https://media.istockphoto.com/photos/easel-with-done-word-and-clock-in-room-3d-rendering-picture-id1184615901' alt='image' className='img' />
                        {props.todos
                            .filter(item => item.done === true)
                            .map(item => <li key={item.id}>{item.message}</li>

                            )}

                    </CardText>
                </CardBody>
            </Card>
            <Card>
                <CardBody>
                    <h1>Tested Tasks</h1>
                    <CardText>
                        <img src='https://as1.ftcdn.net/jpg/04/20/75/80/500_F_420758039_fY4A6Xo7Uqi9b1bW7FnxAofr4u5u7A1d.jpg' alt="image" className='img' />

                        {props.todos
                            .filter(item => item.tested === true)
                            .map(item => <li key={item.id}>{item.message}</li>)}


                    </CardText>
                </CardBody>
            </Card>
            <Card>

                <CardBody>
                    <h1>Progress Tasks</h1>
                    <CardText>
                        <img src='https://thumbs.dreamstime.com/z/progress-bar-work-hand-marker-isolated-male-black-felt-tip-completing-filling-up-concept-40281727.jpg' alt="image" className='img' />
                        {props.todos
                            .filter(item => item.progress === true)
                            .map(item => <li key={item.id}>{item.message}
                                <button class="button button2" onClick={() => { props.dispatch(deleteTodo(item.id)) }}>Delete</button>
                                <button class="button button2" onClick={() => {
                                    props.dispatch(doneTodo(item.id))
                                }}>Done</button></li>)}

                    </CardText>
                </CardBody>
            </Card>



        </div>
        <Link to="/">
            <Button className='loginb'>Logout</Button>
        </Link>


    </>
    )
}

const StatetoProps = (state) => ({
    todos: state.todos.data,
})
export default connect(StatetoProps)(MoreList)