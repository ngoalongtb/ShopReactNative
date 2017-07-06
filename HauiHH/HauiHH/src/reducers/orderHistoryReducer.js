var orderHistory = (state = [], action) => {
    switch (action.type) {
        case 'LOAD_ORDER_HISTORY':
            return [
                ...action.orders,
            ]
        default:
            return state
    }
}
export default orderHistory;