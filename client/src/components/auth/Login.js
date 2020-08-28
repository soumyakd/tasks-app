import React from 'react'
import { connect } from 'react-redux'
import { startLoginUser } from '../../actions/userAction'

 class Login extends React.Component {
     constructor(){
        super()
        this.state = {
            email : '',
            password : ''
        }
    }

    handleChange = (e) => {
        this.setState ({
            [e.target.name] : e.target.value
        })
    }

    handleSubmit = (e) => {
        e.preventDefault()
        const formData = {
            email : this.state.email,
            password : this.state.password
        }
        const redirect = () => {
            this.props.history.push('/')
        }
        this.props.dispatch(startLoginUser(formData, redirect))
    }

    render(){
        return(
            <div className='row'>
                <div className='col-md-8 offset-md-2'>
                    <h2> Login </h2>
                    <form onSubmit = {this.handleSubmit}>

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

                            <input type = 'submit' value = 'Login' class='btn btn-primary'/>
                    </form>
                </div>
            </div>
        )
    }
}

export default connect()(Login)