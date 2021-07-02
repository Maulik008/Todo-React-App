const ADD_TODO = 'ADD_TODO'
export const addTodo = (message) => ({
    type: ADD_TODO,
    message,
    id: Math.random()
});

const DELETE_TODO = 'DELETE_TODO'
export const deleteTodo = (id) => ({
    type: DELETE_TODO,
    id
});

const PROGRESS_TODO = 'PROGRESS_TODO'
export const progressTodo = (id, message) => ({
    type: PROGRESS_TODO,
    id,
    message

})

const AUTH_TODO = 'AUTH_TODO'
export const authTodo = (name, email, password, number) => ({
    type: AUTH_TODO,
    name,
    email,
    password,
    number,

});