"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Country = exports.ExchangeRateDollar = void 0;
var xml2js_1 = require("xml2js");
var ExchangeRateBac_1 = require("./entity/ExchangeRateBac");
var axiosInstance_1 = require("./axios/axiosInstance");
var ExchangeRateDollar = function (selectedCountry) {
    return new Promise(function (resolve, reject) {
        axiosInstance_1.axiosInstance.get('/exchangerate/showXmlExchangeRate.do').then(function (response) {
            (0, xml2js_1.parseString)(response.data, function (err, xmlResult) {
                if (err) {
                    reject(err);
                }
                else {
                    var countries = xmlResult.exchangeRates.country;
                    var exchangeRateBac_1 = new ExchangeRateBac_1.ExchangeRateBac();
                    countries.forEach(function (country) {
                        if (country.name[0] === selectedCountry) {
                            exchangeRateBac_1.buy = parseFloat(country.buyRateUSD[0]);
                            exchangeRateBac_1.sale = parseFloat(country.saleRateUSD[0]);
                            console.log(exchangeRateBac_1);
                            resolve(exchangeRateBac_1);
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
