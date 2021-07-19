import { useState } from 'react';
import { connect } from 'react-redux'
import {
    Button,
    Form,
    FormGroup,
    Input,
    Label
} from 'reactstrap';
import '../login/Login.css'

const LoginForm = (props) => {
    const [mb, setMb] = useState('');


    return (<>
        <div className="App">
            <h2>Login Your Account</h2>
            <Form className="form" onSubmit={(e) => {
                e.preventDefault()
                const logemail = e.target.logemail.value
                const logpassword = e.target.logpassword.value

                let checkEmail = props.auth.find(o => o.email === logemail);
                let checkPassword = props.auth.find(o => o.password === logpassword);

                if (checkEmail && checkPassword) {
                    //console.log("success")
                    props.history.push("/home")
                }
                else {
                    setMb('Email & Password are Not Match.')
                }

            }} >
                <FormGroup>
                    <Label for="exampleEmail">Email</Label>
                    <Input
                        type="logemail"
                        name="logemail"
                        id="Logemail"
                        placeholder="example@example.com"
                        autoComplete="nope"
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
                <p className='regb'>{mb}</p>
                <Button className='loginb'>Submit</Button>
                <Button className='loginb' onClick={() => { props.history.push("/") }}>Registration</Button>
            </Form>
        </div>
    </>
    );
};


const StatetoProps = (state) => ({
    auth: state.Auth.authData,
})

export default connect(StatetoProps)(LoginForm)



