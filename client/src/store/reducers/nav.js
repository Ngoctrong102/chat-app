const initState = {
    feature: "Chat",
    // showFormProfile: false,
    // showPopUp: true,
    popUp: ''
}

const navigatorReducer = (state = initState, action) => {
    switch (action.type) {
        case "CHANGE_FEATURE":
            {
                return {...state, feature: action.payload.feature };
            }
        case "TOGGLE_POP_UP":
            {
                return {
                    ...state,
                    popUp: action.payload.popUp
                }
            }
        default:
            {
                return state
            }
    }
}

export default navigatorReducer;