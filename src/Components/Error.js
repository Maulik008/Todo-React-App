import React from 'react';



const Error = (props) => {


    return (

        <div>
            <h3>You Cannot Access this page without Registration</h3>
            <button className="button button2" onClick={() => { props.history.push("/") }} >Register</button>
        </div>
    )
}


export default Error