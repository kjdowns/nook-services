
const appReducer = (state = {
    user: {},
    islands: [],
    fetching: false,
    loggedIn: false,
    message: ""
}, action) => {
    switch (action.type) {
        case "START_LOADING_USER":
        case "START_LOADING_ISLANDS":
        case "START_BUG_UPDATE":
        case "START_FISH_UPDATE":
            return {...state, fetching: true}

        case "LOAD_USER":
            return {...state, user: action.data, fetching: false, loggedIn: true, message: ""}

        case "LOAD_ISLANDS":
            return {...state, islands: action.islands, fetching: false}

        case "ERROR":
            return {...state, message: action.message.replace(">", ""), fetching: false}

        default:
            return state;
    }
}

export default appReducer;