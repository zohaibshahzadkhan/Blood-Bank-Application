/*import React, { Component } from 'react';
import {connect} from "react-redux"
import Appbar from "../component/appbar/appbar"
class App extends Component {

  render(){
        return (
         <div className="App">
            <Appbar/>
         </div>
        );
    }
  }
  
export default App;*/
import React from 'react';
import AppBar from 'material-ui/AppBar';
import firebase from 'firebase';
import { browserHistory } from 'react-router';
import { connect } from 'react-redux';

import Middleware from "../store/middleware/middleware"

import Container from 'muicss/lib/react/container';
import Row from 'muicss/lib/react/row';
import Col from 'muicss/lib/react/col';


function mapStateToProps(state)
{
    return {
    loginStatus:state.LoginStatusReducer,
    userInfo:state.UserInformation
        
    };
}

function mapDispatchToProps(dispatch)
{
    return{
        login_user:()=>dispatch(Middleware.Login()),
        logout_user:()=>dispatch(Middleware.Logout())

    };
}


class Appbar extends React.Component {

    Login(event) {
     event.preventDefault();
     this.props.login_user();
    }
    Logout(event){
        event.preventDefault();
        this.props.logout_user();
    }
    render() {
        return (
            <div>
                <center>
                    <div>
                        <AppBar
                            title="BLOOD BANK APPLICATION" style={{background:'#424242'}} 
                            iconStyleLeft={{ marginLeft:120 }} 
                            iconElementRight={this.props.loginStatus === true
                                ? 
                                <div className="btn-group" onClick={this.Logout.bind(this)} >
                                    <a className='btn btn-primary'><i className="fa fa-facebook" style={{ width: 6, height: 16 }}></i></a>
                                    <a className='btn btn-primary ' href='' style={{ 'width': 100 }}> Logout</a>
                                </div>
                                :
                                <div className="btn-group" onClick={this.Login.bind(this)} >
                                    <a className='btn btn-primary'><i className="fa fa-facebook" style={{ width: 6, height: 16 }}></i></a>
                                    <a className='btn btn-primary ' href='' style={{ 'width': 150 }}>Facebook Sign in</a>
                                </div>}
                        />
                         
                    </div>
                    
                    {this.props.children}
                   
                </center>

            </div>
        )
    }
}
export default connect(mapStateToProps,mapDispatchToProps)(Appbar)