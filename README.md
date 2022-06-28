# exchange-rates-bac

Tipo de Cambio del Banco BAC Credomatic (https://www.baccredomatic.com/)

## Install

    npm i exchange-rates-bac-dollar

## Example

    import { ExchangeRateDollar, Country } from 'exchange-rates-bac-dollar';

    const exchange = ExchangeRateDollar(Country.NI).then(exchangeRate => {
      console.log(exchangeRate);
    });

## Output

    {
      buy: 687.00,
      sale: 701.00
    }

## Countries

    CR | 'Costa Rica'
    SV | 'El Salvador'
    GT | 'Guatemala'
    HN | 'Honduras'
    NI | 'Nicaragua'
    PA | 'Panamá'
    CL | 'Colombia'
