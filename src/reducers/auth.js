const initialState = {
    authData: []
};

const Auth = (state = initialState, action) => {
    switch (action.type) {
        case 'AUTH_TODO':
            return {

                authData: [...state.authData, {
                    name: action.name,
                    email: action.email,
                    password: action.password,
                    number: action.number
                }]
            }
        default:
            return state;
    }
}

export default Auth;