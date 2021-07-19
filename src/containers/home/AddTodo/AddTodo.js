import React, { useState } from 'react';
import { connect } from 'react-redux'
import { addTodo } from './../../../actions/index'
import './../AddTodo/Addtodo.css';
import {
    Button,
    Card,
    CardBody,
    CardTitle,
    CardText
} from "reactstrap";


const AddTodo = (props) => {

    const [emp, setemp] = useState("");

    return (<>

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
        </div>
    </>
    )
}

export default connect()(AddTodo);