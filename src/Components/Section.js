import React from 'react'
import { connect } from 'react-redux'
import { deleteTodo, doneTodo } from '../actions'
import AssignmentTurnedInIcon from '@material-ui/icons/AssignmentTurnedIn';
import DeleteIcon from '@material-ui/icons/Delete';
import CachedIcon from '@material-ui/icons/Cached';
import Tooltip from '@material-ui/core/Tooltip';
import Fab from '@material-ui/core/Fab';
import { makeStyles } from '@material-ui/core/styles';
import RadioButtonCheckedIcon from '@material-ui/icons/RadioButtonChecked';

const useStyles = makeStyles((theme) => ({
    fab: {
        margin: theme.spacing(1),
    },
    absolute: {
        position: 'absolute',
        bottom: theme.spacing(2),
        right: theme.spacing(3),
    },
}));

const Section = (props) => {

    const classes = useStyles();
    return (
        < div className="my-5 card-group" >

            <div className="container ">
                <h2 className="text-dark fontlist2">  My TODO Section</h2>
                <div className="row" >

                    <div className="my-3  col-md-4 ">
                        <div className="card cardss ak" style={{
                            width: "22rem"
                        }}>

                            <div className="card-body">
                                <h5 className="heading text-center text-white text-decoration-underline card-title font-weight-bold ">Done Tasks</h5>
                                <p className="card-text">
                                    <ul  >

                                        {props.todos
                                            .filter(item => item.done === true)
                                            .map(item => <li style={{ color: "white" }} className="my-1 cardsec fontlist" key={item.id}>{item.message}</li>

                                            )}
                                    </ul>
                                </p>

                            </div>
                        </div>
                    </div>


                    <div className="my-3  col-md-4 ">
                        <div className="card cardss ck" style={{
                            width: "22rem"
                        }}>

                            <div className="card-body">
                                <h5 className="heading text-center text-white text-decoration-underline card-title font-weight-bold">Tested Tasks</h5>
                                <p className="card-text">
                                    <ul>

                                        {props.todos
                                            .filter(item => item.tested === true)
                                            .map(item => <li style={{ color: "white" }} className="my-1 cardsec fontlist" key={item.id}>{item.message}</li>)}
                                    </ul>

                                </p>

                            </div>
                        </div>
                    </div>

                    <div className=" my-3  col-md-4 ">
                        <div className="card cardss bk" style={{ width: "22rem" }}>

                            <div className="card-body">

                                <h5 className="heading text-white text-center text-decoration-underline card-title font-weight-bold">Progress Tasks</h5>
                                <p className="card-text">
                                    <ul>
                                        {props.todos
                                            .filter(item => item.progress === true)
                                            .map(item => <li style={{ color: "white" }} className="my-1 cardpro fontlist" key={item.id}>{item.message}

                                                <Tooltip title="Delete" aria-label="add">
                                                    <Fab size="small" color="primary" className={classes.fab}>

                                                        <DeleteIcon fontSize="small" onClick={() => { props.dispatch(deleteTodo(item.id)) }} />
                                                    </Fab></Tooltip>
                                                <Tooltip title="Done" aria-label="add">
                                                    <Fab size="small" color="primary" className={classes.fab}>

                                                        <AssignmentTurnedInIcon fontSize="small" onClick={() => {
                                                            props.dispatch(doneTodo(item.id))
                                                        }} />
                                                    </Fab></Tooltip>


                                            </li>)}
                                    </ul>
                                </p>

                            </div>
                        </div>
                    </div>



                </div>
            </div>
            <button className=" button button3" onClick={() => {
                props.todos.map(e => { props.dispatch(deleteTodo(e.id)) })
            }} >All Reset</button>

        </div >

    )

}

const StatetoProps = (state) => ({
    todos: state.todos.data,
})
export default connect(StatetoProps)(Section)
