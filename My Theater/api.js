import { clearUserData, getUserData, setUserData } from "./util.js";



let hostName = 'http://localhost:3030';

async function request(url, options) {
    try {
        let response = await fetch(hostName + url, options)

        if (response.ok == false) {
            let error = await response.json()
            throw new Error(error.message)
        }
        if (response.status == 204) {
            return response;
        } else {
            return response.json()
        }
    } catch (err) {
        alert(err.message)
        throw err;
    }
}

function createOptions(method = 'GET', data) {
    const options = {
        method,
        headers: {}
    }
    if (data != undefined) {
        options.headers['Content-Type'] = 'application/json';
        options.body = JSON.stringify(data);
    }
    let userData = getUserData()
    if (userData) {
        options.headers['X-Authorization'] = userData.token;
    }

    return options;
}

export async function get(url) {
    return request(url, createOptions())
}
export async function post(url, data) {
    return request(url, createOptions('POST', data))
}
export async function put(url, data) {
    return request(url, createOptions('PUT', data))
}
export async function del(url) {
    return request(url, createOptions('DELETE'))
}

export async function login(email, password) {
    let result = await post('/users/login', { email, password });

    let userData = {
        username: result.username,
        email: result.email,
        id: result._id,
        gender: result.gender,
        token: result.accessToken
    }
    setUserData(userData);
    return result;
}

export async function register(email, password) {
    let result = await post('/users/register', {email, password});

    let userData = { 
        email: result.email,
        id: result._id,
        token: result.accessToken
    }
    setUserData(userData);
    return result;
}

export async function logout() {
   await get('/users/logout');
    clearUserData();
}



