import axios from "axios"
import {bacUrl} from "../helpers/helpers";

export const axiosInstance = axios.create({
	baseURL: bacUrl,
});
