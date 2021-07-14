import React from 'react'
import { connect } from 'react-redux'
import { deleteTodo, doneTodo, testedTodo, progressTodo } from '../../../actions'
import '../List/List.css'
// import { makeStyles } from '@material-ui/core/styles';


// import DeleteIcon from '@material-ui/icons/Delete';
// import AssignmentTurnedInIcon from '@material-ui/icons/AssignmentTurnedIn';
// import RadioButtonCheckedIcon from '@material-ui/icons/RadioButtonChecked';

// const useStyles = makeStyles((theme) => ({
//     fab: {
//         margin: theme.spacing(2),
//     },
//     absolute: {
//         position: 'absolute',
//         bottom: theme.spacing(2),
//         right: theme.spacing(3),
//     },
// }));
const List = (props) => {
    // const classes = useStyles();
    return (
        <>
            <div className="col slist ">
                <div className="card cardx my-1 " >
                    {/* <div className="card-body"> */}
                    {/* <h5 className="card-title"></h5> */}
                    <ul className="card-text">
                        {props.todos
                            .filter(item => item.done === false && item.tested === false && item.progress === false)
                            .map((todo, index) => (<>

                                <li className="my-2 fontlist" key={index}>
                                    <p className='l_text'> {todo.message}</p>
                                    <button className="button " onClick={() => props.dispatch(progressTodo(todo.id))} >Progress</button>
                                    <button className="button1" onClick={() => props.dispatch(testedTodo(todo.id))} >Tested</button>
                                    <button className="button2" onClick={() => props.dispatch(doneTodo(todo.id))} >Done</button>
                                    <button className="button3" onClick={() => props.dispatch(deleteTodo(todo.id))}> Delete</button>
                                </li>
                            </>
                            ))}
                    </ul>
                </div>
            </div>

        </>
    )
}

const mapStatetoProps = (state) => ({
    todos: state.todos.data,
})
export default connect(mapStatetoProps)(List)
