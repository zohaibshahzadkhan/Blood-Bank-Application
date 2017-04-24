import React, { Component } from 'react';

import DropDownMenu from 'material-ui/DropDownMenu';
import MenuItem from 'material-ui/MenuItem';
import RaisedButton from 'material-ui/RaisedButton';
import Avatar from 'material-ui/Avatar';
import FloatingActionButton from 'material-ui/FloatingActionButton';
import ContentAdd from 'material-ui/svg-icons/content/add';


import { browserHistory } from 'react-router';
import { connect } from 'react-redux';
import firebase from 'firebase';
import Middleware from "../../store/middleware/middleware"

import {
  Table,
  TableBody,
  TableHeader,
  TableHeaderColumn,
  TableRow,
  TableRowColumn
} from 'material-ui/Table';


function mapStateToProps(state)
{
    return {
        Alldonars:state.AvailableDonars,
        userInfo:state.UserInformation
    };
}

function mapDispatchToProps(dispatch)
{
    return{
        bloodNeeded:(bloodType)=>dispatch(Middleware.FindDonarForRequestedBlood(bloodType))

    };
}
class Dashboard extends Component {
  constructor(props) {
    super(props);

    this.state = {
      value: 1,
    };

  }

  componentWillMount() {
            firebase.auth().onAuthStateChanged((user) => {
            if (user) {
               
            } else {
                browserHistory.push('/');
            } 
        })
  }


  BloodgroupHandler(event, key) {
    event.preventDefault();

    this.setState({ value: 1 + key });
    var bloodType= event.target.childNodes[0].nodeValue;
    this.props.bloodNeeded(bloodType);

  }



  DonateForm(ev) {
    
    ev.preventDefault();
    browserHistory.replace('/donateform');
  }



  render() {

    // const style = {
    //   height: 270,
    //   width: 400,
    //   margin: 20,
    //   textAlign: 'center',
    //   display: 'inline-block',
    // };


    return (

      <div>
        <span>
          <h3 style={{display:'inline-block'}}>“Tears of a mother cannot save her child, but your blood can.” <b>Donating blood</b> saves lives!</h3>
          <FloatingActionButton ref="addbutton" onClick={this.DonateForm.bind(this)} style={{ marginLeft: '50px',marginTop:'30Px' }} label="Donate Blood" >
            <ContentAdd/>
          </FloatingActionButton>
        </span>
        <br/>
        <br/>
        <br />
        <p style={{ fontSize: '20px' }}>BLOOD GROUP TYPE </p>
        
        <DropDownMenu  value={this.state.value} onChange={this.BloodgroupHandler.bind(this)}  ref="blood"  >
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
        <br />
         <p style={{ fontSize: '20px'}}><b>REGISTERED DONAR'S</b>  </p>


  
        <Table  adjustForCheckbox={false}>
          <TableHeader>
            <TableRow>
              <TableHeaderColumn ><h4>ID</h4></TableHeaderColumn>
              <TableHeaderColumn><h4>Image</h4></TableHeaderColumn>
              <TableHeaderColumn><h4>Name</h4></TableHeaderColumn>
              <TableHeaderColumn><h4>Contact Number</h4></TableHeaderColumn>
              <TableHeaderColumn><h4>Blood Group</h4></TableHeaderColumn>
            </TableRow>
          </TableHeader>
          <TableBody>
            {this.props.Alldonars.map(function (val, i) {
              return (
                <TableRow key={i}>
                  <TableRowColumn>{i + 1}</TableRowColumn>
                  <TableRowColumn> <Avatar src={val.photo} /></TableRowColumn>
                  <TableRowColumn>{val.name}</TableRowColumn>
                  <TableRowColumn>{val.number}</TableRowColumn>
                  <TableRowColumn>{val.bloodType}</TableRowColumn>
                </TableRow>
              )
            })}
          </TableBody>
        </Table>

      </div>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Dashboard);
