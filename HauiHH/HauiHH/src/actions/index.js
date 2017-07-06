import {LOGIN_FAIL, LOGIN_SUCCESS} from './actionTypes';
import {server_api} from './../config/server';


export var loginTest = ()=>{
    return{
        type:'LOGIN'
    }
}

export var logout = ()=>{
    return{
        type:'LOGOUT'
    }
}