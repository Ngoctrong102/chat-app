const initState = {
    feature: "Chat"
}

const navigatorReducer = (state = initState, action) => {
    switch (action.type) {
        case "CHANGE_FEATURE":
            {
                const newState = {...state, feature: action.payload.feature };
                // newState.feature = action.payload.feature;
                return newState;
            }
        default:
            {
                return state
            }
    }
}

export default navigatorReducer;