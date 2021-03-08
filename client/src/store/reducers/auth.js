const initState = {
    user: null,
    token: localStorage.getItem("token") || null
}

const authReducer = (state = initState, action) => {
    switch (action.type) {
        case "LOGIN":
            {
                const newState = {...state, user: action.payload.user, token: action.payload.token };
                return newState;
            }
        case "FETCH_USER_INFOR":
            {
                return {
                    ...state,
                    user: action.payload.user
                }
            }
        case "LOGOUT":
            {
                localStorage.removeItem('token');
                return {
                    user: null,
                    token: null
                }
            }
        default:
            {
                return state;
            }
    }
}

export default authReducer;