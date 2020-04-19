
export function fetchIslands(){
    return (dispatch) => {
        dispatch({type: 'START_LOADING_ISLANDS'})
        fetch(`http://localhost:3001/islands`)
        .then(response => response.json())
        .then(islands => dispatch({type: 'LOAD_ISLANDS', islands}))
    }
}