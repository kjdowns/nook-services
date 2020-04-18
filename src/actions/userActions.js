
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

export function fetchUser(userId){
    return (dispatch) => {

    }
}