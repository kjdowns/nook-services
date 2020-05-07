const apiPath = "https://nook-services-api.herokuapp.com/"

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
        
        fetch(apiPath + "users", configObj)
        .then(response => response.json())
        .then(data => {
            if (data.exception) {
                let message = data.exception.replace("#<ActiveRecord::RecordInvalid: Validation failed:", "")
                dispatch({type: "ERROR", message})
            } else {
                dispatch({type: 'LOAD_USER', data});
            }
        })
    }
}

export function fetchUser(userData){
    return (dispatch) => {
        dispatch({type: 'START_LOADING_USER'})
        let configObj = {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "Accept": "application/json" 
            },
            body: JSON.stringify(userData)
        }
        fetch(apiPath + `login`, configObj)
        .then(response => response.json())
        .then(data => {
            console.log(data)
            if (data.error) {
                let message = data.error
                dispatch({type: 'ERROR', message})
            } else {
                dispatch({type: 'LOAD_USER', data})
            }
        })
    }
}

export function throwError(message){
    return (dispatch) => {
        dispatch({type: "ERROR", message})
    }
}