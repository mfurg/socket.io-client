export const userReducer = (state, action) => {
    switch(action.type) {
        case 'username':
            return { ...state, username: action.payload }
        case 'login':
            return { ...state, isAuth: true }
        default: 
            return state

    }
}