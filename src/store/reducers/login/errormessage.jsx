import LoginAction from "../../action/login"

function LoginErrorMessageReducer(state="",action)
{
    switch(action.type)
    {
        case LoginAction.loginError:
        return action.errorMessage
        default:return state
    }
}
export default LoginErrorMessageReducer;