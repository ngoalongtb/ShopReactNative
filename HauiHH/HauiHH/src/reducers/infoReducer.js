
var info = (state = {
    loaded:false,
    info:null
}, action) => {
    switch (action.type) {
        case 'LOAD_INFO':
            return {
                ...state,
                info
            }
        default:
        return state
    }
}

export default info;