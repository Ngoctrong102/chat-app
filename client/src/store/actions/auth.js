import User from '../../service/User';
export const handleLogin = (username, password) => async dispatch => {
    var respone = await User.login(username, password);
    localStorage.setItem('token', respone.token);
    dispatch({
        type: "LOGIN",
        payload: {
            user: respone.user,
            token: respone.token
        }
    })
}

export const fetchUserInfor = (token) => async dispatch => {
    try {
        const respone = await User.fetchInfor(token);
        dispatch({
            type: "FETCH_USER_INFOR",
            payload: {
                user: respone.user
            }
        })
    } catch (err) {
        console.error(err + " lỗi nè");
    }
}

export const logout = () => {
    return {
        type: "LOGOUT"
    }
}

export const handleSignUp = (username, password, repass) => async dispatch => {
    try {
        var respone = await User.signUp(username, password, repass);
        dispatch({
            type: "LOGIN",
            payload: {
                user: respone.user,
                token: respone.token
            }
        })
    }
}