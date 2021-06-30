import React, { useState } from 'react';
//import { connect } from 'react-redux';

//import {useForm} from"react-hook-from";
const Input = (props) => {


    const [userRegistration, setUserRegistration] = useState({
        fullname: "",
        email: "",
        password: "",
        phone: ""

    });
    const handleInput = (e) => {
        const name = e.target.name;
        const value = e.target.value;
        //console.log(name, value);

        setUserRegistration({ ...userRegistration, [name]: value })

        //input field is remove
        //setUserRegistration({fullname:"", email:"", password:"",phone:""})
    }

    const [records, setRecords] = useState([]);
    console.log(records)
    const handleSubmit = (e) => {
        e.preventDefault();
        //console.log("jhdfghjhgfg");
        const newRecord = { ...userRegistration, id: new Date().getTime().toString() }
        //console.log(records);
        setRecords([...records, newRecord]);

    }

    return (
        <>
            <div onClick={(e) => handleSubmit(e)} className="container">
                <h1 className="text-success ">Registration Form </h1>
                <div className="col-lg-8 m-auto d-block">
                    <form action="#" >
                        <div className="form-group">
                            <label htmlFor="fullname">Full Name</label>
                            <input type="text"
                                value={userRegistration.fullname}
                                className="form-control"
                                onChange={handleInput}
                                name="fullname" id="fullname" />
                        </div>
                        {/* <div><h1></h1>{props.name}</div> */}
                        <div className="form-group">
                            <label htmlFor="email">Email address</label>
                            <input type="text" value={userRegistration.email} onChange={handleInput}
                                name="email" id="email" className="form-control" />
                        </div>
                        <div className="form-group">
                            <label htmlFor="password">Password</label>
                            <input type="text" value={userRegistration.password} onChange={handleInput}
                                name="password" id="password" className="form-control" />
                        </div>
                        <div className="form-group">
                            <label htmlFor="phone">Phone Number</label>
                            <input type="text" value={userRegistration.phone} onChange={handleInput}
                                name="phone" id="phone" className="form-control" />
                        </div>

                    </form>
                    <button type="submit" className="btn btn-success">Registration</button>

                </div>
            </div>
        </>
    )
};


// const mapStateToProps = (state) => {

//     return {
//         name: state.name
//     }
// }

// const mapDispatchToProps = (dispatch) => {
//     return {
//         changeName: (name) => { dispatch({ type: 'CHANGE_NAME', payload: name }) }
//     }
// }

//export default connect(mapStateToProps, mapDispatchToProps)(Input);
export default Input;

//window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()