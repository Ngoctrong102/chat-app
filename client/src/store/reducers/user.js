const initState = {
    user: null,
    token: localStorage.getItem("token") || null,
    error: false,
    errMessage: '',
    reqFriends: [],
    conversations: []

}

const userReducer = (state = initState, action) => {
    switch (action.type) {
        case "LOGIN":
            {
                return {
                    ...state,
                    user: action.payload.user,
                    token: action.payload.token
                };

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
                return {
                    user: null,
                    token: null
                }
            }
        case "LOGIN_ERR":
            {
                return {
                    ...state,
                    error: true,
                    errMessage: action.payload.errMessage
                }
            }
        case "RESET_ERR":
            {
                return {
                    ...state,
                    error: false,
                    errMessage: ''
                }
            }
        case "UPDATE_USER_INFOR":
            {
                return {
                    ...state,
                    user: {...action.payload.user }
                }
            }
        case "PUSH_REQ_FRIEND":
            {
                return {
                    ...state,
                    reqFriends: [action.payload.req, ...state.reqFriends]
                }
            }
        default:
            {
                return state;
            }
    }
}

export default userReducer;