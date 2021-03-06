import { 
    GET_LOGS, 
    SET_LOADING, 
    LOGS_ERROR, 
    ADD_LOG, 
    DELETE_LOG, 
    SET_CURRENT, 
    CLEAR_CURRENT, 
    UPDATE_LOG, 
    SEARCH_LOGS 
} from './types';

// export const getLogs = () => {
//     // we could return but we want an async call with redux thunk
//     return async (dispatch) => {
//         setLoading();

//         const res = await fetch('http://localhost:5000/logs');
//         const data = await res.json();

//         dispatch({
//             type: GET_LOGS,
//             payload: data
//         })
//     }
// }

// This is a shorthand of the above
// Get logs from server
export const getLogs = () => async dispatch => {
    try {
        // we could return but we want an async call with redux thunk
        setLoading();

        const res = await fetch('http://localhost:5000/logs');
        const data = await res.json();

        dispatch({
            type: GET_LOGS,
            payload: data
        });
    } catch (error) {
        dispatch({
            type: LOGS_ERROR,
            payload: error.response.data
        });
    }
}

export const addLog = (log) => async dispatch => {
    try {
        setLoading();

        const res = await fetch('http://localhost:5000/logs', {
            method: "POST",
            body: JSON.stringify(log),
            headers: {
                'Content-Type': 'application/json'
            }
        });
        const data = await res.json();

        dispatch({
            type: ADD_LOG,
            payload: data
        })
    } catch (error) {
        dispatch({
            type: LOGS_ERROR,
            payload: error.response.data
        });
    }
}

export const deleteLog = (id) => async dispatch => {
    try {
        setLoading();

        await fetch(`http://localhost:5000/logs/${id}`, {
            method: "DELETE"
        });

        dispatch({
            type: DELETE_LOG,
            payload: id
        })
    } catch (error) {
        dispatch({
            type: LOGS_ERROR,
            payload: error
        });
    }
}

export const updateLog = (log) => async dispatch => {
    try {
        setLoading();

        const res = await fetch(`http://localhost:5000/logs/${log.id}`, {
            method: "PUT",
            body: JSON.stringify(log),
            headers: {
                'Content-Type': 'application/json'
            }
        });

        const data = await res.json();

        dispatch({
            type: UPDATE_LOG,
            payload: data
        })
    } catch (error) {
        dispatch({
            type: LOGS_ERROR,
            payload: error
        });
    }
}

export const searchLogs = (text) => async dispatch => {
    try {
        setLoading();

        const res = await fetch(`http://localhost:5000/logs?q=${text}`);
        const data = await res.json();

        dispatch({
            type: SEARCH_LOGS,
            payload: data
        })
    } catch (error) {
        dispatch({
            type: LOGS_ERROR,
            payload: error.response.data
        });
    }
}

export const setCurrent = (log) => {
    return {
        type: SET_CURRENT,
        payload: log
    }
}

export const clearCurrent = () => {
    return {
        type: CLEAR_CURRENT
    }
}

// set loading to true
export const setLoading = () => {
    return {
        type: SET_LOADING
    };
}