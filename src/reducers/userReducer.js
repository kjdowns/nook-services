
const userReducer = (state = {
    user: {},
    fetching: false,
    loggedIn: false
}, action) => {
    switch (action.type) {
        case "START_LOADING_USER":
            return {...state, fetching: true}

        case "LOAD_USER":
            console.log(action.user)
            return{...state, user: action.user, fetching: false, loggedIn: true}

        default:
            return state;
    }
}

export default userReducer;