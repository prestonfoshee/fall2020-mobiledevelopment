let state = {
    count: 0,
    on: false
};


function reducer(state, action) {
    switch (action.type) {
        case 'increment':
            return { count: state.count + 1 };
        case 'decrement':
            return { count: state.count - 1 };
        case 'toggle':
            return { on: !state.on };
        default:
            throw new Error();
    }
}

export { state, reducer };