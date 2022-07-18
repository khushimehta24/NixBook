import axios, { Method } from 'axios';
import axiosHandler from '../helpers/axiosHandler';


export default async function makeRequest(url, method, inputPayload) {
    let requestConfig = {
        baseURL: `${process.env.REACT_APP_API}`,
        url: url,
        method: method,
        headers: {
            // Authorization: sessionStorage.getItem("authToken") || ""
        },
        data: {}
    };

    // console.log(requestConfig)
    if (method !== 'get' && inputPayload) {
        requestConfig.data = inputPayload;
    }

    try {
        let response = await axios.request(requestConfig);
        return response;
    } catch (error) {
        axiosHandler(error);
        throw error;
    }


}

export function makeParams(params) {
    let paramString = "?"
    for (const param in params) {
        if (params[param].value) {
            if (Number(param) != 0) paramString = paramString + "&"
            paramString = paramString + params[param].index + "=" + params[param].value
        }
    }
    return paramString;
}