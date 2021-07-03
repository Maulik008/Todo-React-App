import React, { useState } from 'react';
import { connect } from 'react-redux'
import { authTodo } from '../actions'
import {
    Button,
    Form,
    FormGroup,
    Input,
    Label
} from 'reactstrap';
import './css/form.css';
import '../style.css';

const RegForm = (props) => {

    const [empt, setempt] = useState('')
    return (
        <div className="App" >
            <h2>Register In Todo App</h2>
            <Form className="form" onSubmit={(e) => {
                e.preventDefault()
                let username = e.target.username.value
                let email = e.target.email.value
                let password = e.target.password.value

                if (username === "" || email === "" || password === "") {
                    setempt("All Fields Required")
                }

                else {
                    props.dispatch(authTodo(username, email, password));
                    e.target.username.value = ""
                    e.target.email.value = ""
                    e.target.password.value = ""
                    props.history.push("/log")
                    setempt("")
                }

            }} >
                <p>{empt}</p>
                <FormGroup>
                    <Label for="username">Username</Label>
                    <Input
                        type="text"
                        name="username"
                        id="Username"
                        placeholder="Maulik"
                    />
                </FormGroup>
                <FormGroup>
                    <Label for="Email">Email</Label>
                    <Input
                        type="email"
                        name="email"
                        id="Email"
                        placeholder="example@example.com"
                    />
                </FormGroup>
                <FormGroup>
                    <Label for="Password">Password</Label>
                    <Input
                        type="password"
                        name="password"
                        id="Password"
                        placeholder="********"
                    />
                </FormGroup><br />
                <Button>Register</Button>
            </Form>

            <button className="button button2" onClick={() => { props.history.push("/log") }} >Login</button>
        </div>
    );

}
export default connect()(RegForm)




