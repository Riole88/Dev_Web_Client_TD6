import { BASE_URL, API_KEY } from "@/variable/conf";
import axios from "axios";

const apiPlugin = {
    install(app, options) {
        const api = axios.create({
            baseURL: options.baseURL,
            headers: {
                Authorization: `key=${options.apiKey}`
            }
        });

        app.config.globalProperties.$api = api;
    }
};

export default apiPlugin;