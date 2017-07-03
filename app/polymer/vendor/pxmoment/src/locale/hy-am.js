//! moment.js locale configuration
//! locale : Armenian (hy-am)
//! author : Armendarabyan : https://github.com/armendarabyan

import moment from '../moment';

export default moment.defineLocale('hy-am', {
    months : {
        format: 'Õ°Õ¸ÖÕ¶Õ¾Õ¡ÖÕ«_ÖÕ¥Õ¿ÖÕ¾Õ¡ÖÕ«_Õ´Õ¡ÖÕ¿Õ«_Õ¡ÕºÖÕ«Õ¬Õ«_Õ´Õ¡ÕµÕ«Õ½Õ«_Õ°Õ¸ÖÕ¶Õ«Õ½Õ«_Õ°Õ¸ÖÕ¬Õ«Õ½Õ«_ÖÕ£Õ¸Õ½Õ¿Õ¸Õ½Õ«_Õ½Õ¥ÕºÕ¿Õ¥Õ´Õ¢Õ¥ÖÕ«_Õ°Õ¸Õ¯Õ¿Õ¥Õ´Õ¢Õ¥ÖÕ«_Õ¶Õ¸ÕµÕ¥Õ´Õ¢Õ¥ÖÕ«_Õ¤Õ¥Õ¯Õ¿Õ¥Õ´Õ¢Õ¥ÖÕ«'.split('_'),
        standalone: 'Õ°Õ¸ÖÕ¶Õ¾Õ¡Ö_ÖÕ¥Õ¿ÖÕ¾Õ¡Ö_Õ´Õ¡ÖÕ¿_Õ¡ÕºÖÕ«Õ¬_Õ´Õ¡ÕµÕ«Õ½_Õ°Õ¸ÖÕ¶Õ«Õ½_Õ°Õ¸ÖÕ¬Õ«Õ½_ÖÕ£Õ¸Õ½Õ¿Õ¸Õ½_Õ½Õ¥ÕºÕ¿Õ¥Õ´Õ¢Õ¥Ö_Õ°Õ¸Õ¯Õ¿Õ¥Õ´Õ¢Õ¥Ö_Õ¶Õ¸ÕµÕ¥Õ´Õ¢Õ¥Ö_Õ¤Õ¥Õ¯Õ¿Õ¥Õ´Õ¢Õ¥Ö'.split('_')
    },
    monthsShort : 'Õ°Õ¶Õ¾_ÖÕ¿Ö_Õ´ÖÕ¿_Õ¡ÕºÖ_Õ´ÕµÕ½_Õ°Õ¶Õ½_Õ°Õ¬Õ½_ÖÕ£Õ½_Õ½ÕºÕ¿_Õ°Õ¯Õ¿_Õ¶Õ´Õ¢_Õ¤Õ¯Õ¿'.split('_'),
    weekdays : 'Õ¯Õ«ÖÕ¡Õ¯Õ«_Õ¥ÖÕ¯Õ¸ÖÕ·Õ¡Õ¢Õ©Õ«_Õ¥ÖÕ¥ÖÕ·Õ¡Õ¢Õ©Õ«_Õ¹Õ¸ÖÕ¥ÖÕ·Õ¡Õ¢Õ©Õ«_Õ°Õ«Õ¶Õ£Õ·Õ¡Õ¢Õ©Õ«_Õ¸ÖÖÕ¢Õ¡Õ©_Õ·Õ¡Õ¢Õ¡Õ©'.split('_'),
    weekdaysShort : 'Õ¯ÖÕ¯_Õ¥ÖÕ¯_Õ¥ÖÖ_Õ¹ÖÖ_Õ°Õ¶Õ£_Õ¸ÖÖÕ¢_Õ·Õ¢Õ©'.split('_'),
    weekdaysMin : 'Õ¯ÖÕ¯_Õ¥ÖÕ¯_Õ¥ÖÖ_Õ¹ÖÖ_Õ°Õ¶Õ£_Õ¸ÖÖÕ¢_Õ·Õ¢Õ©'.split('_'),
    longDateFormat : {
        LT : 'HH:mm',
        LTS : 'HH:mm:ss',
        L : 'DD.MM.YYYY',
        LL : 'D MMMM YYYY Õ©.',
        LLL : 'D MMMM YYYY Õ©., HH:mm',
        LLLL : 'dddd, D MMMM YYYY Õ©., HH:mm'
    },
    calendar : {
        sameDay: '[Õ¡ÕµÕ½ÖÖ] LT',
        nextDay: '[Õ¾Õ¡Õ²Õ¨] LT',
        lastDay: '[Õ¥ÖÕ¥Õ¯] LT',
        nextWeek: function () {
            return 'dddd [ÖÖÕ¨ ÕªÕ¡Õ´Õ¨] LT';
        },
        lastWeek: function () {
            return '[Õ¡Õ¶ÖÕ¡Õ®] dddd [ÖÖÕ¨ ÕªÕ¡Õ´Õ¨] LT';
        },
        sameElse: 'L'
    },
    relativeTime : {
        future : '%s Õ°Õ¥Õ¿Õ¸',
        past : '%s Õ¡Õ¼Õ¡Õ»',
        s : 'Õ´Õ« ÖÕ¡Õ¶Õ« Õ¾Õ¡ÕµÖÕ¯ÕµÕ¡Õ¶',
        m : 'ÖÕ¸ÕºÕ¥',
        mm : '%d ÖÕ¸ÕºÕ¥',
        h : 'ÕªÕ¡Õ´',
        hh : '%d ÕªÕ¡Õ´',
        d : 'ÖÖ',
        dd : '%d ÖÖ',
        M : 'Õ¡Õ´Õ«Õ½',
        MM : '%d Õ¡Õ´Õ«Õ½',
        y : 'Õ¿Õ¡ÖÕ«',
        yy : '%d Õ¿Õ¡ÖÕ«'
    },
    meridiemParse: /Õ£Õ«Õ·Õ¥ÖÕ¾Õ¡|Õ¡Õ¼Õ¡Õ¾Õ¸Õ¿Õ¾Õ¡|ÖÕ¥ÖÕ¥Õ¯Õ¾Õ¡|Õ¥ÖÕ¥Õ¯Õ¸ÕµÕ¡Õ¶/,
    isPM: function (input) {
        return /^(ÖÕ¥ÖÕ¥Õ¯Õ¾Õ¡|Õ¥ÖÕ¥Õ¯Õ¸ÕµÕ¡Õ¶)$/.test(input);
    },
    meridiem : function (hour) {
        if (hour < 4) {
            return 'Õ£Õ«Õ·Õ¥ÖÕ¾Õ¡';
        } else if (hour < 12) {
            return 'Õ¡Õ¼Õ¡Õ¾Õ¸Õ¿Õ¾Õ¡';
        } else if (hour < 17) {
            return 'ÖÕ¥ÖÕ¥Õ¯Õ¾Õ¡';
        } else {
            return 'Õ¥ÖÕ¥Õ¯Õ¸ÕµÕ¡Õ¶';
        }
    },
    ordinalParse: /\d{1,2}|\d{1,2}-(Õ«Õ¶|ÖÕ¤)/,
    ordinal: function (number, period) {
        switch (period) {
        case 'DDD':
        case 'w':
        case 'W':
        case 'DDDo':
            if (number === 1) {
                return number + '-Õ«Õ¶';
            }
            return number + '-ÖÕ¤';
        default:
            return number;
        }
    },
    week : {
        dow : 1, // Monday is the first day of the week.
        doy : 7  // The week that contains Jan 1st is the first week of the year.
    }
});

