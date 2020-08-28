import axios from 'axios'

const getToken = localStorage.getItem('authToken')

export const setTasks = (data) => {
    return { type: 'SET_TASK', payload: data}
}

export const startGetTasks = () => {
    return(dispatch) => {
        axios.get('/tasks', {headers: {'Authorization': getToken}})
        .then((response) => {
            const tasks = response.data
            // console.log('[PROMISE-get]', tasks)
            dispatch(setTasks(tasks))
        })
        .catch((err) => {
            console.log(err)
        })
    }
}

// Add task
export const addTasks = (data) => {
    return { type: 'ADD_TASK', payload: data}
}

export const startAddTasks = (data) => {
    return(dispatch) => {
        axios.post('/tasks', data, {headers: {'Authorization': getToken}})
        .then((response) => {
            const tasks = response.data
            dispatch(addTasks(tasks)) 
        })
        .catch((err) => {
            console.log(err)
        })
    }
}

// Remove task
export const removeTasks = (id) => {
    return { type: 'REMOVE_TASK', payload: id}
}

export const startRemoveTasks = (id) => {
    return(dispatch) => {
        axios.delete(`/tasks/${id}`, {headers: {'Authorization': getToken}})
        .then((response) => {
            dispatch(removeTasks(id))
        })
        .catch((err) => {
            console.log(err)
        })
    }
}

// Update task
export const updateTasks = (id, data) => {
    return { type: 'UPDATE_TASK', payload: { id, data }}
}

export const startUpdateTasks = (id, taskData) => {
    return(dispatch) => {
        axios.put(`/tasks/${id}`, taskData, {headers: {'Authorization': getToken}})
        .then((response) => {
            dispatch(updateTasks(id, taskData))
        })
        .catch((err) => {
            console.log(err)
        })
    }
}