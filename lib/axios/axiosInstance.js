"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.axiosInstance = void 0;
const axios_1 = require("axios");
exports.axiosInstance = axios_1.default.create({
    baseURL: 'https://www.sucursalelectronica.com',
});
