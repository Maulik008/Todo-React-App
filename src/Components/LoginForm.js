import { useState } from 'react';
import { connect } from 'react-redux'
import {
    Button,
    Form,
    FormGroup,
    Input,
    Label
} from 'reactstrap';
import './css/form.css';

const LoginForm = (props) => {

    const [mb, setmb] = useState("");

    return (
        <div className="App">
            <h2>Login Your Account</h2>
            <Form className="form" onSubmit={(e) => {
                e.preventDefault()
                let email = e.target.logemail.value
                let password = e.target.logpassword.value

                let checkEmail = props.auth.find(o => o.email === email);
                let checkPassword = props.auth.find(o => o.password === password);

                if (checkEmail && checkPassword) {
                    console.log("success")
                    props.history.push("/Home")
                }
                else {
                    (console.log("false"))
                    setmb("Error in Email")
                }

            }} >
                <FormGroup>
                    <p>{mb}</p>
                    <Label for="exampleEmail">Email</Label>
                    <Input
                        type="email"
                        name="logemail"
                        id="Logemail"
                        placeholder="example@example.com"
                    />
                </FormGroup>
                <FormGroup>
                    <Label for="examplePassword">Password</Label>
                    <Input
                        type="password"
                        name="logpassword"
                        id="Logpassword"
                        placeholder="********"
                    />
                </FormGroup><br />
                <Button>Log in</Button>
            </Form>
        </div >
    );
};


const StatetoProps = (state) => ({
    auth: state.Auth.authData,
})

export default connect(StatetoProps)(LoginForm)



