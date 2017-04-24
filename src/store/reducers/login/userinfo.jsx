import LoginAction from "../../action/login"

function UserInformation(state="",action)
{
    switch(action.type)
    {
        case LoginAction.userInfo:
        return  action.userData
        default:return state

    }
}

export default UserInformation;