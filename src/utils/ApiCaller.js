import axios from "axios";
import * as config from "../constants/config";

export default function callApi(endpoint, method = "GET", body) {
    return axios({
        method: method,
        url: `${config.API_PRODUCT_URL}/${endpoint}`,
        data: body
    }).catch(error => {
        console.log(error);
    });
}
