import React from 'react';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';
import DropDownMenu from 'material-ui/DropDownMenu';
import MenuItem from 'material-ui/MenuItem';
import Paper from 'material-ui/Paper';
import { connect } from 'react-redux';

import Middleware from "../../store/middleware/middleware"
import firebase from 'firebase';
import {browserHistory} from 'react-router';




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
        SubmitDonarDeatail:(donarInfo,bloodType)=>dispatch(Middleware.SubmitForm(donarInfo,bloodType)),

    };
}


export class DonarForm extends React.Component{

 constructor(props) {
    super(props);

    this.state = {
        value: 1,
        bloodType:''
  
    };
  }

componentWillMount() {
            firebase.auth().onAuthStateChanged((user) => {
            if (user) {
                console.log("user is authenticate")
            } else {
                browserHistory.push('/');
            } 
        })
  }




    Submit(event){
        event.preventDefault();

        const new_donar = {
         name : this.props.userInfo.displayName,
         email :this.props.userInfo.email,
         number : this.refs.phonenumber.getValue(),
         address : this.refs.address.getValue(),
         photo: this.props.userInfo.photoURL,         
         bloodType : this.state.bloodType
        }
        // console.log(new_donar, this.state.bloodType);
        
        this.props.SubmitDonarDeatail(new_donar, this.state.bloodType);
    }


    BloodgroupHandler(event,key){ 
    event.preventDefault();
    
    this.setState({
        value: key+1,
        bloodType: event.target.childNodes[0].nodeValue
    });
        
}

    render(){

    const style = {
    
        height: 340,
        width: 820,
        margin: 20,
        textAlign: 'center',
        display: 'inline-block',
    };

        return(

      <div>
        
            <h2>PERSONAL DETAIL</h2>
        <Paper style={style} zDepth={1} >
            <form onSubmit={this.Submit.bind(this)}>
          <br /><br />
          <TextField hintText="Contact number" floatingLabelText="Phone number" type="number"  ref="phonenumber" required="required"/>          
          <br />
          <TextField hintText="Your Address" floatingLabelText="Address" type="commentbox" ref="bloodType" ref="address" required="required"/>
          <br  />
          <DropDownMenu value={this.state.value} onChange={this.BloodgroupHandler.bind(this)} style={{width: 200}} required="required">
          <MenuItem value={1} primaryText="Blood Group" disabled />
          <MenuItem value={2} primaryText="A+" />
          <MenuItem value={3} primaryText="B+" />
          <MenuItem value={4} primaryText="AB+" />
          <MenuItem value={5} primaryText="O+" />
          <MenuItem value={6} primaryText="O-" />
          <MenuItem value={7} primaryText="AB-" />
          <MenuItem value={8} primaryText="B-" />
          <MenuItem value={9} primaryText="A-" />
        </DropDownMenu>  

        <br /><br />
          <RaisedButton  type="Submit" primary={true}>Submit</RaisedButton>

        </form>
        </Paper>
      </div>
     
        )
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(DonarForm);