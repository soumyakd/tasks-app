import React from 'react'
import { connect } from 'react-redux'
import Tasks from './Tasks'
// import TaskTable from './TaskTable'
import Home from './components/static/Home' 
import Register from './components/auth/Register'
import Login from './components/auth/Login'
import { startUserLogout } from './actions/userAction'
import 'bootstrap/dist/css/bootstrap.css'
 
import { BrowserRouter, Route, Link, Switch } from 'react-router-dom'

function App(props){
    const handleLogout = () => {
        props.dispatch(startUserLogout())
    }
    return(
        <BrowserRouter>                                                                                
            <div className='container'> 
                <h1> TaskBox </h1>
                <Link to = '/'> Home </Link>
                {
                    Object.keys(props.user).length !== 0 ? (
                        <div>                        
                            <Link to = '/dashboard'> DashBoard | </Link>
                            <Link to = '/tasks'> Tasks | </Link>
                            <Link to = '/account'> Account | </Link>
                            <Link to = '#' onClick = {handleLogout}> Logout </Link>
                        </div>
                    ) : (
                        <div>
                            <Link to = '/users/register'> Register </Link>
                            <Link to = '/users/login'> Login </Link>
                        </div>
                    )
                }
                
                <Switch>
                    <Route path = '/' component = {Home} exact = {true} />
                    <Route path = '/users/register' component = {Register} />
                    <Route path = '/users/login' component = {Login} />
                    <Route path = '/tasks' component = {Tasks} />
                    {/* <Route path = '/' component = {TaskTable} /> */}
                </Switch>
            </div>
        </BrowserRouter>  
    )
}

const mapStateToProps = (state) => {
    return {
        tasks: state.tasks,
        user : state.user
    }
}
export default connect(mapStateToProps)(App)











