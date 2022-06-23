# exchange-rates-bac
Tipo de Cambio del Banco BAC Credomatic (https://www.baccredomatic.com/)

## Install

    npm i exchange-rates-bac-dollar

## Example

    import { ExchangeRateDollar } from 'exchange-rates-bac-dollar';
    import { CR } from 'exchange-rates-bac-dollar/helper';

    const exchange = ExchangeRateDollar(CR);

## Response

    {
			buy: 687.00,
			sale: 701.00
    }

## Countries
    CR | 'Costa Rica';
    SV | 'El Salvador';
    GT | 'Guatemala';
    HN | 'Honduras';
    NI | 'Nicaragua';
    PA | 'Panamá';
    CL | 'Colombia';
