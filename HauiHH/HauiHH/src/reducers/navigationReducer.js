import {server_api} from './../config/server';


var navigation = (state = {}, action) =>
{
    switch (action.type) {
        case 'LOAD_NAVIGATION':{
            return {
                ...state,
                navigation:action.navigation
            }
        }
        default:
            return state;
    }
}
export default navigation;