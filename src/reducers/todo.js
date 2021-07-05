const initialState = {
    data: []
};

const Todos = (state = initialState, action) => {
    switch (action.type) {
        case 'ADD_TODO':
            return {
                ...state,
                data: [...state.data, {
                    message: action.message,
                    id: action.id,
                    done: action.done,
                    tested: action.tested,
                    progress: action.progress
                }]
            }
        case 'DELETE_TODO':
            const todos = state.data.filter((todo) => todo.id !== action.id)
            return {
                ...state,
                data: todos
            }
        case 'DONE_TODO':
            const index = state.data.findIndex((todo) => todo.id === action.id)
            const newarr = [...state.data]
            newarr[index].done = true
            newarr[index].tested = false
            newarr[index].progress = false
            return {
                ...state,
                data: newarr
            }
        case 'TESTED_TODO':
            const testindex = state.data.findIndex((todo) => todo.id === action.id)
            const testnewarr = [...state.data]
            testnewarr[testindex].tested = true
            testnewarr[testindex].done = false
            testnewarr[testindex].progress = false
            return {
                ...state,
                data: testnewarr
            }
        case 'PROGRESS_TODO':
            const progindex = state.data.findIndex((todo) => todo.id === action.id)
            const prognewarr = [...state.data]
            prognewarr[progindex].progress = true
            prognewarr[progindex].done = false
            prognewarr[progindex].tested = false
            return {
                ...state,
                data: prognewarr
            }
        default:
            return state;
    }
}

export default Todos;