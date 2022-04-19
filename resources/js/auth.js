import bearer from "@websanova/vue-auth/src/drivers/auth/bearer";
import axios from "@websanova/vue-auth/src/drivers/http/axios.1.x";
import router from "@websanova/vue-auth/src/drivers/router/vue-router.2.x";
/**
 * Authentication configuration, some of the options can be override in method calls
 */

export const configAuth = {
    drivers: {
        auth: bearer,
        http: axios,
        router: router,
    },
};