import { combineReducers } from 'redux'

import user from './userReducer';
import info from './infoReducer';
import shop from './shopReducer';
import navigation from './navigationReducer';
import cart from './cartReducer';
import orderHistory from './orderHistoryReducer';
import search from './searchReducer';

const reducers = combineReducers({
    user,
    info,
    shop,
    navigation,
    cart,
    orderHistory,
    search
})

export default reducers;