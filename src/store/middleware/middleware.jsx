import LoginAction from "../action/login"
import firebase from 'firebase';
import {browserHistory} from 'react-router';

export default class Middleware
{
    static Login()
    {
        return (dispatch)=>{
           
            var provider = new firebase.auth.FacebookAuthProvider();
            firebase.auth().signInWithPopup(provider).then(function (result) { 
            var user = result.user;
            
            dispatch(LoginAction.isLoggedin(true));
            dispatch(LoginAction.GetUserInfo(user))
            // dispatch(LoginAction.GetUserInfo(user.photoURL));
            browserHistory.replace('/dashboard');
            }).catch(function (error) {
            dispatch(LoginAction.errorMessage(error));
        });
        }
    }
    static Logout()
    { 
        return(dispatch)=>{
            firebase.auth().signOut().then(
            function (){
            dispatch(LoginAction.isLoggedin(false));
            dispatch(LoginAction.GetUserInfo(null));
             browserHistory.replace('/');
            }).catch(
            function (error) {
            dispatch(LoginAction.errorMessage(error));
        });
        }
    }
     static SubmitForm(userDetail,bloodGroup)
    {
        return (dispatch) => {
        firebase.database().ref('BLOODGROUP/' + bloodGroup + '/').push({ userDetail })
        browserHistory.replace('/dashboard');   

    }
}

    static FindDonarForRequestedBlood(RequestedBlood)
    {
        return (dispatch)=>{

        var donarsPair=[];
        var donars=[];
        switch(RequestedBlood)
        {
            case "A+":
                donarsPair.push(['O+','A+', 'O-', 'A-' ])
                break;
            case "B+":
            
                donarsPair.push(['B+', 'O+', 'B-', 'O-']);
               
                break;
             
                
            
            case "AB+": 
                donarsPair.push(['AB+', 'AB-', 'O+', 'O-', 'A+', 'A-', 'B+', 'B-']);
                break;
            
            case "O+": 
                donarsPair.push(['O+', 'O-']);
                break;
            
            case "A-": 
                donarsPair.push(['A-', 'O-']);
                break;
            
            case "B-": 
                donarsPair.push(['B-', 'O-']);
                break;
            
            case "AB-": 
                donarsPair.push(['AB-', 'O-', 'A-', 'B-']);
                break;
            
            case "O-": 
                donarsPair.push(['O-']);
                break;
            }
        

        donarsPair.map((v,i)=>{
            return v.map((value,index)=>{
                firebase.database().ref('/BLOODGROUP/'+ value +'/').on("value",(snapshot)=>{
                    let object=snapshot.val();
                    
                    for(var item in object)
                    {
                        donars.push(object[item].userDetail);
                       
                    }
                });
            });
        });       

        dispatch(LoginAction.DonarsAvailable(donars))
        }
    }

}
