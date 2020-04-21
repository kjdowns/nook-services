
const userReducer = (state = {
    user: {},
    islands: [],
    fetching: false,
    loggedIn: false
}, action) => {
    switch (action.type) {
        case "START_LOADING_USER":
        case "START_LOADING_ISLANDS":
        case "START_BUG_UPDATE":
            return {...state, fetching: true}

        case "BUG_UPDATED":
            return {...state, fetching: false}

        case "LOAD_USER":
            return {...state, user: action.user, fetching: false, loggedIn: true}

        case "LOAD_ISLANDS":
            return {...state, islands: action.islands, fetching: false}

        default:
            return state;
    }
}

export default userReducer;