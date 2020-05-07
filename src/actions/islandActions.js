const apiPath = "http://localhost:3001/"

export function fetchIslands(){
    return (dispatch) => {
        dispatch({type: 'START_LOADING_ISLANDS'})
        fetch(apiPath + `islands`)
        .then(response => response.json())
        .then(islands => dispatch({type: 'LOAD_ISLANDS', islands}))
    }
}