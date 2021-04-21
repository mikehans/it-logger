import { GET_LOGS, SET_LOADING, LOGS_ERROR } from './types';

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
        })
    } catch (error) {
        dispatch({
            type: LOGS_ERROR,
            payload: error.response.data
        });
    }
}

// set loading to true
export const setLoading = () => {
    return {
        type: SET_LOADING
    };
}