const mongoose = require('mongoose')
const Schema = mongoose.Schema
// id, title, completed, createdAt, dueDate
const taskSchema = new Schema ({
    title: {
        type: String,
        minlength: [3, 'title should be more than 3 characters'],
        required: true
    },
    createdOn: {
        type: Date,
        default: Date.now
    },
    dueDate: {
        type: Date
    },
    actions: {
        type: String
    },
    user:{
        type: Schema.Types.ObjectId,
        ref: 'User',
        required: true
    }
})

const Task = mongoose.model('Task', taskSchema)

module.exports = Task
