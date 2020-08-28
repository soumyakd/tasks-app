import React from 'react'
import {connect} from 'react-redux'
import {startRemoveTasks} from './actions/tasksAction'
import moment from 'moment'

class TaskTable extends React.Component{
    state= {
        search: ''
    }

    searchOnChange = (e) => {
        this.setState({
            search: e.target.value
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

    handleRemove = (id) => {
        this.props.dispatch(startRemoveTasks(id))
    }

    render(){
        return(
            <div> 
                <br/><br/>
                <label htmlFor= 'search'> </label>
                <input type= 'text' 
                        placeholder= 'Search by title'
                        id= 'search'
                        name= 'search'
                        value={this.state.search} 
                        onChange={this.handleChange}/>
                <br/><br/>

                <table className='table'>
                    <thead>
                        <tr> 
                            <th>  </th>
                            <th> Title </th> 
                            <th> CreatedOn </th>
                            <th> DueDate </th>
                            <th> Actions </th> 
                        </tr> 
                    </thead> 
                    <tbody>
                        {
                            this.props.tasks.map((task, i) => {
                                return (
                                    <tr key={i}>
                                        <td> 
                                        <input type="checkbox" checked={task.completed} onChange={() => {
                                                        this.handleComplete(task)
                                                    }} />
                                        </td>
                                        <td> {task.title} </td>
                                        <td> {task.createdOn} </td> 
                                        <td> {
                                        moment(task.dueDate).format('MMMM Do YYYY, h:mm:ss a')} </td>
                                        <td> 
                                            <button onClick={() => {
                                                this.handleRemove(task._id)
                                            }} className='btn btn-primary'> remove </button> 
                                        
                                        </td> 
                                    </tr> 
                                )
                            })
                        }
                    </tbody> 
                </table> 
            </div> 
        )
    }
}

const mapStateToProps = (state) => {
    return{
        tasks: state.tasks
    }
}

export default connect(mapStateToProps)(TaskTable)