import {server_api} from './../config/server';


var shop = (state = {}, action) =>
{
    switch (action.type) {
        case 'LOAD_CATEGORYS':{
            return {
                ...state,
                categorys:action.categorys
            }
        }
        case 'LOAD_PRODUCTS':{
            return {
                ...state,
                products:{
                    ...state.products,
                    [action.id]:action.products
                }
            }
        }
        default:
            return state;
    }
}
export default shop;