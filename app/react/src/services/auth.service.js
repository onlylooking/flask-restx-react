import axios from "axios";

const API_URL = "http://127.0.0.1:5000/api/";

const register = (username, email, password) => {
    return axios.post(API_URL + "user/register", {
        username,
        email,
        password,
    });
};

const login = (email, password) => {
    return axios.post(API_URL + "user/login", {
        email,
        password,
    })
    .then((response) => {
        if (response.data.user && response.data.success === true) {
            localStorage.setItem("token", response.data.token);
            localStorage.setItem("user", JSON.stringify(response.data.user));
        }
       
        return response;
    });
};

const logout = (token) => {
    localStorage.removeItem("user");
    localStorage.removeItem("token");
    return axios
    .post(API_URL + "user/logout", {}, {
        headers: {
            'Content-Type' : 'application/json',
            'authorization': token
        }
    })
    .then((response) => {
        return response;
    });
    
};

const getCurrentUser = () => {
    return JSON.parse(localStorage.getItem("user"));
  };

const AuthService = {
    register,
    login,
    logout,
    getCurrentUser
}

export default AuthService;