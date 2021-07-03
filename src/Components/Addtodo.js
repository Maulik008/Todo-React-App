import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux'
import { addTodo } from '../actions'
import List from './list'
import Section from './Section'
import Search from './Search'
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
        <div >
            <Card>
                <CardBody>
                    <CardTitle className=" mb-3" tag="h3">
                        My TODO
                    </CardTitle>
                    <CardTitle className=" mb-3" tag="h3">
                        <Search />
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
                            <p>{emp}</p>
                            <input type="text" placeholder="Add Todo" name="username" />
                            <Button color="primary"
                            >Add Todo</Button>
                        </form>
                    </CardText>

                </CardBody>


            </Card>

            <Card>
                <h2>Your  Todo</h2>
                <List />
            </Card>

            <Card>
                <Section />
            </Card>
            <Card>
                <CardBody>
                    <button className="button button3" onClick={() => { props.history.push("/") }} >LogOut</button>
                </CardBody>
            </Card>

        </div>
    )


}

const StatetoProps = (state) => ({
    auth: state.Auth.authData,
})
export default connect(StatetoProps)(AddTodo);