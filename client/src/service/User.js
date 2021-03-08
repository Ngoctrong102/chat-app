const API_URL = "http://localhost:8888";
class User {
    fetchInfor(token) {
        return fetch(API_URL + "/user", {
                method: "post",
                headers: {
                    'Content-Type': 'application/json;charset=utf-8'
                },
                body: JSON.stringify({ token })
            })
            .then(res => res.json())
    }
    login(username, password) {
        return fetch(API_URL + "/user/login", {
                method: "post",
                body: JSON.stringify({ username, password })
            })
            .then(res => res.json())
    }
}


export default new User();