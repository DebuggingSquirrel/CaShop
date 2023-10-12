import axios from "axios";
import CONFIG from "../config/config.json";

export const customAxios = axios.create({
  baseURL: `${CONFIG.SERVER}`,
  headers: {
    "Content-Type": "application/json",
  },
});
