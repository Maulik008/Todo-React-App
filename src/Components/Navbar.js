import React, { useState } from 'react';
import {
    Button,
    Navbar,
    Nav, Form, FormControl, Row, Col
} from 'react-bootstrap';
import Search from './Search'


const Todonavbar = (props) => {

    return (

        <div>

            <Row><Navbar bg="dark" variant="dark">
                <Col></Col>
                <Col><Navbar.Brand className="font-weight-bold" >TODO APP</Navbar.Brand></Col>


                {props.search ? <Search /> : <div></div>}
                <Col>

                </Col>
            </Navbar>
            </Row>
        </div>
    );
}

export default Todonavbar;