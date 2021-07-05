import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux'
import { addTodo } from '../actions'
import List from './list'
import Section from './Section'
import './css/form.css';
import {
    Button,
    Card,
    CardBody,
    CardTitle,
    CardText
} from "reactstrap";

const AddTodo = (props) => {

    useEffect(() => {
        if (props.auth[0]) {
            return true
        }
        else {
            props.history.push("/Error")
        }
    });

    const [emp, setemp] = useState("");
    return (
        <div className="container my-3">
            <Card className="text-center">
                <CardBody>

                    <CardTitle className=" mb-3" tag="h3">

                    </CardTitle>
                    <CardText className=" mb-4">
                        <form onSubmit={(e) => {
                            e.preventDefault()
                            let mb = e.target.username.value
                            if (mb === "") {
                                setemp("Please Enter Your Todo")
                            }
                            else {
                                console.log(mb)
                                props.dispatch(addTodo(mb));
                                setemp("")
                                e.target.username.value = ""

                            }

                        }}>
                            <p className="text-danger">{emp}</p>
                            <input type="text" placeholder="Add Todo" name="username" />
                            <Button className="mx-2 bg-danger"
                            >Add Todo</Button>


                        </form>
                    </CardText>

                </CardBody>


            </Card>

            <Card className="my-3 bg-light">
                <List />
            </Card>

            <Section />
            <Card className="my-1 bg-light">
                <CardBody >
                    <button className=" button button3" onClick={() => { props.history.push("/") }} >LogOut</button>
                </CardBody>
            </Card>

        </div>
    )


}

const StatetoProps = (state) => ({
    auth: state.Auth.authData,
})
export default connect(StatetoProps)(AddTodo);