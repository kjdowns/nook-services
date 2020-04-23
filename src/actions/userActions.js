
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
        fetch(`http://localhost:3001/login`, configObj)
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
        .then(data => dispatch({type: 'LOAD_USER', data}))
        .catch(error => console.log(error))
    }
}

export function updateFish(fishData){
    return (dispatch) => {
        dispatch({type: 'START_FISH_UPDATE'})
        let configObj = {
            method: "PATCH",
            headers: {
                "Content-Type": "application/json",
                "Accept": "application/json" 
            },
            body: JSON.stringify(fishData)
        }
        fetch(`http://localhost:3001/fish/${fishData.id}`, configObj)
        .then(response => response.json())
        .then(data => dispatch({type: 'LOAD_USER', data}))
        .catch(error => console.log(error))
    }
}

export function throwError(message){
    return (dispatch) => {
        dispatch({type: "ERROR", message})
    }
}