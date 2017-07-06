var search = (state = [], action) => {
    switch (action.type) {
        case 'SEARCH':
            return [
                ...action.products,
            ]
        default:
            return state
    }
}

export default search;