const taskInitialState = []

const tasksReducer = (state = taskInitialState, action) => {
    switch(action.type) {
        case 'SET_TASK': {
            return [].concat(action.payload)
        }

        case 'ADD_TASK': {
            return [].concat(action.payload)
        }

        case 'REMOVE_TASK': {
            return state.filter(task => task._id !== action.payload)
        }

        case 'UPDATE_TASK': {
            return state.map(task => {
                if(task._id === action.payload.id) {
                    return Object.assign( {}, task.action.payload.data)
                } else {
                    return Object.assign({}, task)
                }
            })
        }

        default: {
            return [].concat(state)
        }
    }
}

export default tasksReducer