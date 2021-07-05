import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom';
import './css/form.css';
import { deleteTodo, doneTodo } from '../actions'
import { Card, CardBody, CardTitle, CardText, Button } from "reactstrap";


const MoreList = (props) => {
    useEffect(() => {
        console.log(props.todos);
    }, [])

    return (<>

        <div className=" card-group" >
            <Card>
                <CardBody>
                    <CardTitle>Done Tasks</CardTitle>
                    <CardText>
                        <ul>

                            {props.todos
                                .filter(item => item.done === true)
                                .map(item => <li key={item.id}>{item.message}</li>

                                )}
                        </ul>
                    </CardText>
                </CardBody>
            </Card>
            <Card>

                <CardBody>
                    <CardTitle>Progress Tasks</CardTitle>
                    <CardText>
                        <ul>
                            {props.todos
                                .filter(item => item.progress === true)
                                .map(item => <li key={item.id}>{item.message}
                                    <button class="button button2" onClick={() => { props.dispatch(deleteTodo(item.id)) }}>Delete</button>
                                    <button class="button button2" onClick={() => {
                                        props.dispatch(doneTodo(item.id))
                                    }}>Done</button></li>)}
                        </ul>
                    </CardText>
                </CardBody>
            </Card>

            <Card>
                <CardBody>
                    <CardTitle>Tested Tasks</CardTitle>
                    <CardText>
                        <ul>

                            {props.todos
                                .filter(item => item.tested === true)
                                .map(item => <li key={item.id}>{item.message}</li>)}
                        </ul>

                    </CardText>
                </CardBody>
            </Card>

        </div>
        <Link to="/">
            <Button className='loginb'>Registration</Button>
        </Link>
        <Link to="/login">
            <Button className='loginb'>Login</Button>
        </Link>

    </>
    )
}

const StatetoProps = (state) => ({
    todos: state.todos.data,
})
export default connect(StatetoProps)(MoreList)