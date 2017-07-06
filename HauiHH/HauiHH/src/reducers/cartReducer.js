var cart = (state = [], action) => {
    switch (action.type) {
        case 'LOAD_CART':
            return action.cart;
        case 'ADD_PRODUCT':
            return [
                ...state,
                {
                    product:action.product,
                    count:1
                }
            ]
        case 'ADD_COUNT':
        {
            state[action.index] = {
                ...state[action.index],
                count:state[action.index].count+1
            }
            return [
                ...state
            ];
        }
        case 'SUB_COUNT':
        {
            state[action.index] = {
                ...state[action.index],
                count:state[action.index].count-1
            }
            return [
                ...state
            ];
        }
        case 'REMOVE_CART':
        {
            state.splice(action.index, 1);
            return [
                ...state
            ];
        }
        case 'PAY':{
            return [];
        }
            
        default:
            return state
    }
}

export default cart;