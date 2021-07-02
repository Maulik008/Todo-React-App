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

const RegForm = (props) => {

    return (
        <div className="App" >
            <h2>Register In Todo App</h2>
            <Form className="form" onSubmit={(e) => {
                e.preventDefault()
                let username = e.target.username.value
                let email = e.target.email.value
                let password = e.target.password.value
                let number = e.target.number.value
                props.dispatch(authTodo(username, email, password, number));
                e.target.username.value = ""
                e.target.email.value = ""
                e.target.password.value = ""
                e.target.number.value = ""
                props.history.push('/login');

            }} >
                <FormGroup>
                    <Label for="username">Username</Label>
                    <Input
                        type="text"
                        name="username"
                        id="Username"
                        placeholder="username"
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
                </FormGroup>
                <FormGroup>
                    <Label for="Number">Phone Number</Label>
                    <Input
                        type="number"
                        name="number"
                        id="Number"
                        placeholder="nummber"
                    />
                </FormGroup>
                <br />
                <Button> Submit</Button>
            </Form>
        </div>
    );

}
export default connect()(RegForm)




