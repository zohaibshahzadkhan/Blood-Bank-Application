import LoginAction from "../../action/login"

function LoginStatusReducer(state=false,action)
{
    switch(action.type)
    {
        case LoginAction.setLoginStatus:
        return  action.loginStatusValue
        default:return state

    }
}

export default LoginStatusReducer;