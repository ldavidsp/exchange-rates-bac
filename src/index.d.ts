export declare const ExchangeRateDollar: (selectedCountry: string) => Promise<ExchangeRateBac>;
export declare const Country: {
	NI: string;
	CR: string;
	SV: string;
	GT: string;
	HN: string;
	PA: string;
	CL: string;
};

export declare class ExchangeRateBac {
	buy: number;
	sale: number;
}

export declare const axiosInstance: import("axios").AxiosInstance;


