import { ExchangeRateBac } from "./entity/ExchangeRateBac";
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
