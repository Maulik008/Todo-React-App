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
                    id: action.id
                }]
            }
        case 'DELETE_TODO':
            const todos = state.data.filter((todo) => todo.id !== action.id)
            return {
                ...state,
                data: todos
            }
        // case 'PROGRESS_TODO':
        //     const todo = state.data.filter((todop) => todop.id !== action.id)
        //     return {
        //         ...state,
        //         data: [...state.data, {
        //             message: action.message,
        //             id: action.id
        //         }]
        //     }

        default:
            return state;
    }
}

export default Todos;