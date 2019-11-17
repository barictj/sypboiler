

const defaultState = {
    user: {},
    isAuthenticated: false,

}


const userReducer = (state = defaultState, action) => {
    switch (action.type) {
        case 'ADD_USER':
            return Object.assign({}, state, {
                user: action.user,
                isAuthenticated: true
            })

        case 'LOGOUT_USER':
            return Object.assign({}, state, {
                user: {},
                isAuthenticated: false
            })


        default:
            return state
    }
}

export default userReducer