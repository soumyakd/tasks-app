import React from 'react'
import TaskTable from './TaskTable'

import {connect} from 'react-redux'
import {startAddTasks} from './actions/tasksAction'

class Tasks extends React.Component{
    constructor(){
        super()
        this.state = {
            title: '',
            description: '',
            dueDate: '',
            completed: false
            
        }
    }

    handleChange = (e) => {
        this.setState ({
            [e.target.name] : e.target.value
        })
    }

    handleComplete = () => {
        this.setState({
            completed: !this.state.completed
        })
    }

    
    handleSubmit = (e) => {
        e.preventDefault() 
        const newTask = {
            title: this.state.title, 
            description: this.state.description,
            dueDate: this.state.dueDate,
            completed: this.state.completed
        }
        this.props.dispatch(startAddTasks(newTask))
        this.setState({
            title: '',
            description: '',
            dueDate: '',
            completed: ''
        })
    }

    render() {
        console.log(this.state)
        return (
            <div className='row'>
                <div className='col-md-8 offset-md-2'>
                    <TaskTable/>
                    <h2> Add Task </h2> 
                    <form onSubmit={this.handleSubmit}> 

                        <div className='form-group'>
                            <label htmlFor='title'> title </label> 
                            <input type='text' 
                                    id='title' 
                                    name='title'
                                    value={this.state.title} 
                                    onChange={this.handleChange} 
                                    class='form-control' />
                        </div>

                        <div className='form-group'>
                            <label htmlFor='description'> description </label> 
                            <input type='text'
                                    id='description'
                                    name='description'
                                    value={this.state.description} 
                                    onChange={this.handleChange}
                                    class='form-control' />
                        </div> 
                                    
                        <div className='form-group'>
                            <label> completed </label>
                            <input type= 'checkbox' 
                                    value = {this.state.completed} 
                                    onChange= {this.handleComplete}
                                    class='form-control' />
                        </div>

                        <div className='form-group'>
                            <label htmlFor='dueDate'> due date </label> 
                            <input type='date'
                                    id='dueDate'
                                    name='dueDate'
                                    value={this.state.dueDate} 
                                    onChange={this.handleChange} 
                                    class='form-control' />
                        </div>
                        
                        <input type='submit' value='Add Task' class='btn btn-primary'/>
                    </form>
                </div> 
            </div> 
        )
    }
}


const mapStateToProps = (state) => {
    return{
        tasks: state.tasks
    }
}

export default connect(mapStateToProps)(Tasks)




