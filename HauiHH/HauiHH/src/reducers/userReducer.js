import {server_api} from './../config/server';


var user = (state = {logged:false}, action) =>
{
    switch (action.type) {
        case 'LOGIN_SUCCESS':{
            console.log('login success action',action);
            return {
                ...state,
                logged:true,
                user:action.user
            }
        }
        case 'LOGOUT':{
            return{
                ...state,
                logged:false,
            }
        }
        default:
            return state;
    }
}
export default user;