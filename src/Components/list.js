import React from 'react';
import { connect } from 'react-redux'
import { deleteTodo, doneTodo, testedTodo, progressTodo } from '../actions'
import '../style.css';
import CachedIcon from '@material-ui/icons/Cached';
import Tooltip from '@material-ui/core/Tooltip';
import Fab from '@material-ui/core/Fab';
import { makeStyles } from '@material-ui/core/styles';
import DeleteIcon from '@material-ui/icons/Delete';
import AssignmentTurnedInIcon from '@material-ui/icons/AssignmentTurnedIn';
import RadioButtonCheckedIcon from '@material-ui/icons/RadioButtonChecked';

const useStyles = makeStyles((theme) => ({
    fab: {
        margin: theme.spacing(2),
    },
    absolute: {
        position: 'absolute',
        bottom: theme.spacing(2),
        right: theme.spacing(3),
    },
}));
const List = (props) => {

    const classes = useStyles();

    return (
        <div className="text-center">
            <ul>
                {props.todos
                    .filter(item => item.done === false && item.tested === false && item.progress === false)
                    .map((todo, index) => (

                        <div className="container ">
                            <div className="row ">
                                <div className="col-md-4">
                                    <div className="card cardx my-1">
                                        <li className="my-2 fontlist" key={index}> {todo.message}


                                            <Tooltip title="Delete" aria-label="add">
                                                <Fab size="small" color="primary" className={classes.fab} id="dltfab">

                                                    <DeleteIcon fontSize="small" onClick={() => { props.dispatch(deleteTodo(todo.id)) }} />
                                                </Fab></Tooltip>

                                            <Tooltip title="Done" aria-label="add">
                                                <Fab size="small" color="primary" className={classes.fab} id="addfab">

                                                    <AssignmentTurnedInIcon fontSize="small" onClick={() => {
                                                        props.dispatch(doneTodo(todo.id))
                                                    }} />
                                                </Fab></Tooltip>

                                            <Tooltip title="Tested" aria-label="add">
                                                <Fab size="small" color="primary" className={classes.fab} id="testfab">

                                                    <RadioButtonCheckedIcon fontSize="small" onClick={() => {
                                                        props.dispatch(testedTodo(todo.id))
                                                    }} />
                                                </Fab></Tooltip>

                                            <Tooltip title="Progress" aria-label="add">
                                                <Fab size="small" color="primary" className={classes.fab} id="profab">
                                                    <CachedIcon fontSize="small" onClick={() => {
                                                        props.dispatch(progressTodo(todo.id))
                                                    }} />
                                                </Fab></Tooltip>

                                        </li>

                                    </div>

                                </div>
                            </div>
                        </div>



                    ))}
            </ul>


        </div >
    )
}

const StatetoProps = (state) => ({
    todos: state.todos.data,
})
export default connect(StatetoProps)(List)
