import axios from "axios";
import interceptors from "@/plugins/axios/interceptors";

const instance = axios.create({
  baseURL: process.env.VUE_APP_API_URL
  // params: {
  //   apikey: process.env.VUE_APP_API_KEY,
  //   plot: "full"
  // }
});
interceptors(instance);

export default instance;
