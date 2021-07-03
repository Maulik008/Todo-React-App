import React from 'react'
import { connect } from 'react-redux'
import { deleteTodo, doneTodo } from '../actions'
import { Card, CardBody, CardTitle, CardText } from "reactstrap";

const Section = (props) => {
    return (
        < div className=" card-group" >
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
        </div >

    )

}

const StatetoProps = (state) => ({
    todos: state.todos.data,
})
export default connect(StatetoProps)(Section)
