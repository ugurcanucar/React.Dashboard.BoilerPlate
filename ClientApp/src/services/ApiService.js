import axios from "axios";
import { API_ENDPOINT_URL } from "configs/AppConfig";

const apiService = {};
const apiGateway = axios.create({
  baseURL: API_ENDPOINT_URL,
  timeout: 60000,
});

apiGateway.interceptors.request.use(function (config) {
  const token = localStorage.getItem("auth_token");
  config.headers.Authorization = `Bearer ${token}`;
  return config;
});

apiService.signIn = async (email, password) => {
  return await axios
    .post(API_ENDPOINT_URL + "User/LoginByEmail", {
      email,
      password,
    })
    .then((user) => {
      return user.data;
    })
    .catch((err) => {
      return err.response.data;
    });
};

apiService.signOut = () => {
  localStorage.removeItem("auth_token");
};

apiService.get = (url) => apiGateway.get(url);
apiService.post = (url, data) => apiGateway.post(url, data);
apiService.put = (url, data) => apiGateway.put(url, data);
apiService.delete = (url, id) => apiGateway.delete(url, id);
export default apiService;
