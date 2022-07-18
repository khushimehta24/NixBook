import makeRequest, { makeParams } from "../api/makeRequest";
import urls from "../api/urls";
import { MethodsConst } from "../constants/methodconst";

export class AuthService {

    static async SignUp(username, email, password) {
        return await makeRequest(`${urls.logSig.signup}`, MethodsConst.POST, {
            username: username,
            email: email,
            password: password
        });
    }

    static async Login(username, password) {
        return await makeRequest(`${urls.logSig.login}`, MethodsConst.POST, {
            username: username,
            password: password
        });
    }

}
