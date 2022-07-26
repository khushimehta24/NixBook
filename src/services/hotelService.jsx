import makeRequest, { makeParams } from "../api/makeRequest";
import urls from "../api/urls";
import { MethodsConst } from "../constants/methodconst";

export class HotelService {

    static async GetHotels() {
        return await makeRequest(`${urls.hotels.getHotels}`, MethodsConst.GET);
    }

}
