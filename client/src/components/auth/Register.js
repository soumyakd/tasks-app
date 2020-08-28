import React from 'react'
import { connect } from  'react-redux'
import { startRegisterUser } from '../../actions/userAction'
 class Register extends React.Component {
    constructor(){
        super()
        this.state = {
            username : '',
            email : '',
            password : ''
        }
    }

    handleChange = (e) =>{
        this.setState ({
            [e.target.name] : e.target.value
        })
    }

    handleSubmit = (e) =>{
        e.preventDefault()
        const formData = {
            username : this.state.username,
            email : this.state.email,
            password : this.state.password
        }

        const redirect = () => {
            return this.props.history.push('/users/login')
        }
        this.props.dispatch(startRegisterUser(formData, redirect))
    }

    render(){
        return(
            <div className='row'>
                <div className='col-md-8 offset-md-2'>
                    <h2> Register with us </h2>
                    <form onSubmit = {this.handleSubmit}>

                        <div className='form-group'>
                            <label htmlFor = 'username' > Username </label>
                            <input type = 'text' 
                                    id = 'username'
                                    name = 'username'
                                    value={this.state.username}
                                    onChange={this.handleChange}
                                    class='form-control' />
                        </div> 
                                
                        <div className='form-group'>

                            <label htmlFor = 'email'> Email </label> 
                            <input type = 'text' 
                                    id = 'email' 
                                    name = 'email'
                                    value = {this.state.email} 
                                    onChange = {this.handleChange}
                                    class='form-control' />
                        </div>
                                
                        <div className='form-group'>
                            <label htmlFor = 'password'> Password </label> 
                            <input type = 'password' 
                                    id = 'password' 
                                    name = 'password'
                                    value = {this.state.password} 
                                    onChange = {this.handleChange}
                                    class='form-control' />
                        </div>
                                
                        <input type = 'submit' value = 'Register' class='btn btn-primary'/>
                    </form>   
                </div>
            </div>
        )
    }
}

export default connect()(Register)