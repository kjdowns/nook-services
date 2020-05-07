const apiPath = "http://localhost:3001/"

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
        fetch(apiPath + `bugs/${bugData.id}`, configObj)
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
        fetch(apiPath + `fish/${fishData.id}`, configObj)
        .then(response => response.json())
        .then(data => dispatch({type: 'LOAD_USER', data}))
        .catch(error => console.log(error))
    }
}