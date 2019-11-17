export const addUser = user => ({
    type: 'ADD_USER',
    user: user,
    isAuthenticated: true
})
export const logoutUser = () => ({
    type: 'LOGOUT_USER',
    user: {},
    isAuthenticated: false
})
