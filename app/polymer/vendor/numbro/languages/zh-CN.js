/*!
 * numbro.js language configuration
 * language : simplified chinese
 * locale : China
 * author : badplum : https://github.com/badplum
 */
(function () {
    'use strict';

    var language = {
        langLocaleCode: 'zh-CN',
        cultureCode: 'zh-CN',
        delimiters: {
            thousands: ',',
            decimal: '.'
        },
        abbreviations: {
            thousand: 'å',
            million: 'ç¾ä¸',
            billion: 'åäº¿',
            trillion: 'å'
        },
        ordinal: function () {
            return '.';
        },
        currency: {
            symbol: 'Â¥',
            position: 'prefix'
        },
        defaults: {
            currencyFormat: ',4 a'
        },
        formats: {
            fourDigits: '4 a',
            fullWithTwoDecimals: '$ ,0.00',
            fullWithTwoDecimalsNoCurrency: ',0.00',
            fullWithNoDecimals: '$ ,0'
        }
    };

    // CommonJS
    if (typeof module !== 'undefined' && module.exports) {
        module.exports = language;
    }
    // Browser
    if (typeof window !== 'undefined' && window.numbro && window.numbro.culture) {
        window.numbro.culture(language.cultureCode, language);
    }
}.call(typeof window === 'undefined' ? this : window));
