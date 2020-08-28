// const userInitialState = {
//     _id: '',
//     username: '',
//     email: ''
// }
// const userReducer = (state = userInitialState, action) => {
//     switch(action.type){
//         case 'SET_USER' : {
//             return Object.assign( {}, state, {
//                 _id: action.payload._id,
//                 username: action.payload.username,
//                 email: action.payload.email
//             })
//         }
//         case 'CLEAR_USER' : {
//             return Object.assign( {}, state, {
//                 _id: '',
//                 username: '',
//                 email: ''
//             })
//         }
//         default : {
//             return {...state}
//         }
//     }
// }
// export default userReducer


const userInitialState = {}
const userReducer = (state = userInitialState, action) => {
    switch(action.type){
        case 'SET_USER' : {
            return {...action.payload}
        }
        default : {
            return {...state}
        }
    }
}
export default userReducer