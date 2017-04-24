export default class LoginAction 
{
    static setLoginStatus="setLoginStatus";
    static loginError="loginError";
    static userInfo="userInfo";
    static availableDonars = "availableDonars";

    static isLoggedin(value)
    {
        return {
            type:LoginAction.setLoginStatus,
            loginStatusValue:value
        }
    }

    static errorMessage(value) {

    return {
        type: LoginAction.loginError,
        errorMessage:value
    }
}

    static GetUserInfo(value)
    {
        return {
            type:LoginAction.userInfo,
            userData:value
        }
    }

    static DonarsAvailable(value)
    {
        return{
            type:LoginAction.availableDonars,
            donars:value
        }
    }
   

}