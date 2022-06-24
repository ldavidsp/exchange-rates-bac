"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Country = exports.ExchangeRateDollar = void 0;
const xml2js_1 = require("xml2js");
const ExchangeRateBac_1 = require("./entity/ExchangeRateBac");
const axiosInstance_1 = require("./axios/axiosInstance");
const ExchangeRateDollar = (selectedCountry) => {
    return new Promise((resolve, reject) => {
        axiosInstance_1.axiosInstance.get('/exchangerate/showXmlExchangeRate.do').then((response) => {
            (0, xml2js_1.parseString)(response.data, (err, xmlResult) => {
                if (err) {
                    reject(err);
                }
                else {
                    const countries = xmlResult.exchangeRates.country;
                    const exchangeRateBac = new ExchangeRateBac_1.ExchangeRateBac();
                    countries.forEach((country) => {
                        if (country.name[0] === selectedCountry) {
                            exchangeRateBac.buy = parseFloat(country.buyRateUSD[0]);
                            exchangeRateBac.sale = parseFloat(country.saleRateUSD[0]);
                            console.log(exchangeRateBac);
                            resolve(exchangeRateBac);
                        }
                    });
                }
            });
        });
    });
};
exports.ExchangeRateDollar = ExchangeRateDollar;
// Countries
exports.Country = {
    NI: 'Nicaragua',
    CR: 'Costa Rica',
    SV: 'El Salvador',
    GT: 'Guatemala',
    HN: 'Honduras',
    PA: 'Panamá',
    CL: 'Colombia'
};
