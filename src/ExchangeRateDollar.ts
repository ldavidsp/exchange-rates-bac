import {ExchangeRateBac} from "./entity/ExchangeRateBac";
import {axiosInstance} from "./axios/axiosInstance";

export function ExchangeRateDollar(selectedCountry: string): Promise<ExchangeRateBac> {
	return new Promise((resolve, reject) => {
		axiosInstance.get('/exchangerate/showXmlExchangeRate.do').then(response => {
			const parser = new DOMParser();
			const xml = parser.parseFromString(response.data, "application/xml");
			const countries = xml.querySelectorAll("country");
			countries.forEach(item => {
				const country = item.getElementsByTagName("name")[0].textContent
				if (selectedCountry === country) {
					const buyRateUSD = String(item.getElementsByTagName("buyRateUSD")[0].textContent)
					const saleRateUSD = String(item.getElementsByTagName("saleRateUSD")[0].textContent)

					const exchangeRateBac = new ExchangeRateBac();
					exchangeRateBac.buy = parseFloat(buyRateUSD);
					exchangeRateBac.sale = parseFloat(saleRateUSD);
					resolve(exchangeRateBac);
				}
			});
		});
	});
}

