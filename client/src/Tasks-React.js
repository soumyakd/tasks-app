import React from 'react'
import axios from 'axios'

class Tasks extends React.Component{
    state = {
        tasks: [],
        title: '',
        description: '',
        dueDate: '',
        completed: false
    }

    componentDidMount() {
        axios.get('/tasks')
            .then((response) => {
                console.log(response)
                const tasks = response.data
                this.setState({ tasks })
            })
            .catch((err) => {
                console.log(err)
            })     
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

    handleRemove = (_id) => {
        const confirmRemove = window.confirm("Are you sure?")
        if (confirmRemove) {
            axios.delete(`/tasks/${_id}`)
                .then((response) => {
                    const rTask = response.data 
                    this.setState((prevState) => ({
                        tasks: prevState.tasks.filter(task => task._id !== rTask._id)
                }))
            })
            .catch((err) => {
                console.log(err)
            })
        }
    }

    handleSubmit = (e) => {
        e.preventDefault() 
        const task = {
            title: this.state.title, 
            description: this.state.description,
            dueDate: this.state.dueDate
        }
        if(task.title) { 
           axios.post('/tasks', task)
           .then((response) => {
                const task = response.data
                this.setState(prevState => ({
                    tasks : prevState.tasks.concat(task),
                    title : '',
                    description: '',
                    dueDate: ''
                }))
           })
           .catch((err) => {
               console.log(err)
           })
        } 
        else {
            alert('title and dueDate cannot be blank')
        }
    }

    render() {
        console.log(this.state)
        return (
            <div> 
                <table border="1">
                    <thead>
                        <tr> 
                            <th> Title </th> 
                            <th> CreatedOn </th>
                            <th> DueDate </th>
                            <th> Actions </th> 
                        </tr> 
                    </thead> 
                    <tbody>
                        {
                            this.state.tasks.map((task, i) => {
                                return (
                                    <tr key={task._id}>
                                        <td> { task.title } </td>
                                        <td> {task.createdOn} </td> 
                                        <td>{task.dueDate}</td>
                                        <td> 

                                            <button onClick={() => {
                                                this.handleRemove(task._id)
                                            }}> remove </button> 
                                        
                                        </td> 
                                    </tr> 
                                )
                            })
                        }
                    </tbody> 
                </table> 

                <h2> Add Task </h2> 
                <form onSubmit={this.handleSubmit}> 
                    <label htmlFor='title'> title </label> 
                    <input type='text' 
                            id='title' 
                            name='title'
                            value={this.state.title} 
                            onChange={this.handleChange} /> <br/><br />

                    <label htmlFor='description'> description </label> 
                    <input type='text'
                            id='description'
                            name='description'
                            value={this.state.description} 
                            onChange={this.handleChange} /> <br/><br />

                    <label> Completed </label>
                    <input type= 'checkbox' 
                            value = {this.state.completed} 
                            onChange= {this.handleComplete}/> <br/> <br/>
                    
                    <label htmlFor='dueDate'> due date </label> 
                    <input type='date'
                            id='dueDate'
                            name='dueDate'
                            value={this.state.dueDate} 
                            onChange={this.handleChange} /> <br/><br />
                    
                    <input type='submit' value='Add Task' />
                </form> 
            </div> 
        )
    }
}

export default Tasks