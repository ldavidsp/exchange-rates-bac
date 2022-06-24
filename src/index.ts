import {parseString} from 'xml2js';
import {ExchangeRateBac} from "./entity/ExchangeRateBac";
import {axiosInstance} from "./axios/axiosInstance";

export const ExchangeRateDollar = (selectedCountry: string): Promise<ExchangeRateBac> => {
  return new Promise((resolve, reject) => {
    axiosInstance.get('/exchangerate/showXmlExchangeRate.do').then(response => {
      parseString(response.data, (err, xmlResult) => {
        if (err) {
          reject(err);
        } else {
          const countries = xmlResult.exchangeRates.country;
          const exchangeRateBac = new ExchangeRateBac();

          countries.forEach((country: any) => {
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

// Countries
export const Country = {
  NI: 'Nicaragua',
  CR: 'Costa Rica',
  SV: 'El Salvador',
  GT: 'Guatemala',
  HN: 'Honduras',
  PA: 'Panamá',
  CL: 'Colombia'
}
