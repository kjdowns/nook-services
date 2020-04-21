
export function createUser(userData){
    return (dispatch) => {
        dispatch({type: 'START_LOADING_USER'});
        let configObj = {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "Accept": "application/json" 
            },
            body: JSON.stringify(userData)
        };
        
        fetch("http://localhost:3001/users", configObj)
        .then(response => response.json())
        .then(user => dispatch({type: 'LOAD_USER', user}));
    }
}

export function fetchUser(username){
    return (dispatch) => {
        dispatch({type: 'START_LOADING_USER'})
        fetch(`http://localhost:3001/users/${username}`)
        .then(response => response.json())
        .then(user => dispatch({type: 'LOAD_USER', user}))
    }
}

export function updateBug(bugData){
    return (dispatch) => {
        dispatch({type: 'START_BUG_UPDATE'})
        let configObj = {
            method: "PATCH",
            headers: {
                "Content-Type": "application/json",
                "Accept": "application/json" 
            },
            body: JSON.stringify(bugData)
        }
        fetch(`http://localhost:3001/bugs/${bugData.id}`, configObj)
        .then(response => response.json())
        .then(data => dispatch({type: 'BUG_UPDATED'}))
    }
}