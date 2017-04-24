import LoginAction from "../../action/login"

function AvailableDonars(state=[],action)
{
    switch(action.type)
    {
        case LoginAction.availableDonars:
        return action.donars
        default:return state
    }
}
export default AvailableDonars;