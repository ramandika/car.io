const ROOT_URL = 'http://192.168.1.243:8080';
const SOCKET_URL = 'http://192.168.1.243:3000';
export default {
    API: {
        LOGIN_PATH_URL: `${ROOT_URL}/api/v1/tokens`,
        GET_OTP_URL: `${ROOT_URL}/api/v1/tokens/otp`,
        USER_ME_PATH: `${ROOT_URL}/api/v1/tokens/user_info`,
        GET_CAR_URL: `${ROOT_URL}/api/v1/cars`,
        CREATE_CAR_URL: `${ROOT_URL}/api/v1/cars`,
        GEOLOCATION_API_URL: `${ROOT_URL}/api/v1/geolocations`,
        MONITORED_API_URL: `${ROOT_URL}/api/v1/cars/qr_scan`,
        UPDATE_ONE_SIGNAL_ID: `${ROOT_URL}/api/v1/users`,
        GET_AREA_URL: `${ROOT_URL}/api/v1/areas/surrounding_areas`,
        SOCKET_URL: `${SOCKET_URL}`
    }
};