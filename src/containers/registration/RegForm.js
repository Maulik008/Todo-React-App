import { connect } from 'react-redux'
import { authTodo } from '../../actions'
import { useState } from 'react';
import { Button, Form, FormGroup, Input, Label } from 'reactstrap';
import '../registration/Reg.css'


const RegForm = (props) => {
    const [value, setValue] = useState('');

    return (<>
        <div className="App" >
            <h2>Register In Todo App</h2>
            <Form className="form" onSubmit={(e) => {
                e.preventDefault()
                let username = e.target.username.value
                let email = e.target.email.value
                let password = e.target.password.value
                let number = e.target.number.value

                if (username === "" || email === "" || password === "" || number === "") {
                    setValue("All fields are Required")
                }
                else {
                    props.dispatch(authTodo(username, email, password, number));
                    e.target.username.value = ""
                    e.target.email.value = ""
                    e.target.password.value = ""
                    e.target.number.value = ""
                    props.history.push('/login');
                    setValue('')
                }

            }} >
                <FormGroup>
                    <Label for="username">Username</Label>
                    <Input
                        type="text"
                        name="username"
                        id="Username"
                        placeholder="username"
                    // autocomplete="off"
                    />
                </FormGroup>
                <FormGroup>
                    <Label for="Email">Email</Label>
                    <Input
                        type="email"
                        name="email"
                        id="Email"
                        placeholder="example@example.com"
                    //autocomplete="off"
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
                </FormGroup>
                <FormGroup>
                    <Label for="Number">Phone Number</Label>
                    <Input
                        type="number"
                        name="number"
                        id="Number"
                        placeholder="nummber"
                        autoComplete="nope"
                    />
                </FormGroup>
                <br />
                <p className='regb'>{value}</p>

                <Button> Submit</Button>
            </Form>
        </div>
    </>
    );

}
export default connect()(RegForm)




