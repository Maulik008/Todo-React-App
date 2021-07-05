const ADD_TODO = 'ADD_TODO'
export const addTodo = (message) => ({
    type: ADD_TODO,
    message,
    id: Math.random(),
    done: false,
    tested: false,
    progress: false
});

const DELETE_TODO = 'DELETE_TODO'
export const deleteTodo = (id) => ({
    type: DELETE_TODO,
    id
});
const DONE_TODO = 'DONE_TODO'
export const doneTodo = (id) => ({
    type: DONE_TODO,
    id
});
const TESTED_TODO = 'TESTED_TODO'
export const testedTodo = (id) => ({
    type: TESTED_TODO,
    id
});

const PROGRESS_TODO = 'PROGRESS_TODO'
export const progressTodo = (id) => ({
    type: PROGRESS_TODO,
    id

})

const AUTH_TODO = 'AUTH_TODO'
export const authTodo = (name, email, password, number) => ({
    type: AUTH_TODO,
    name,
    email,
    password,
    number,

});