import axios from "axios";

export const get = async (url: string, params = {}, headers = {}) => {
    const response = await axios.get(url, {
        params: params,
        headers: headers
    });
    return response.data;
}

export const authorizedGet = async (url: string, token: string, params = {}, headers = {}) => {
    return await get(url, params, {
        ...headers,
        Authorization: token
    });
}

export const post = async (url: string, body = {}, headers = {}) => {
    const response = await axios.post(url, body, {
        headers: headers
    });
    return response.data;
}

export const authorizedPost = async (url: string, token: string, body = {}, headers = {}) => {
    return await post(url, body, {
        ...headers,
        Authorization: token
    });
}

export const put = async (url: string, body = {}, headers = {}) => {
    const response = await axios.put(url, body, {
        headers: headers
    });
    return response.data;
}

export const authorizedPut = async (url: string, token: string, body = {}, headers = {}) => {
    return await put(url, body, {
        ...headers,
        Authorization: token
    });
}

export const del = async (url: string, body = {}, headers = {}) => {
    const response = await axios.delete(url, {
        data: body,
        headers: headers
    });
    return response.data;
}

export const authorizedDel = async (url: string, token: string, body = {}, headers = {}) => {
    return await del(url, body, {
        ...headers,
        Authorization: token
    });
}
