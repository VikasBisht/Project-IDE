//! moment.js locale configuration
//! locale : vietnamese (vi)
//! author : Bang Nguyen : https://github.com/bangnk

import moment from '../moment';

export default moment.defineLocale('vi', {
    months : 'thÃ¡ng 1_thÃ¡ng 2_thÃ¡ng 3_thÃ¡ng 4_thÃ¡ng 5_thÃ¡ng 6_thÃ¡ng 7_thÃ¡ng 8_thÃ¡ng 9_thÃ¡ng 10_thÃ¡ng 11_thÃ¡ng 12'.split('_'),
    monthsShort : 'Th01_Th02_Th03_Th04_Th05_Th06_Th07_Th08_Th09_Th10_Th11_Th12'.split('_'),
    monthsParseExact : true,
    weekdays : 'chá»§ nháº­t_thá»© hai_thá»© ba_thá»© tÆ°_thá»© nÄm_thá»© sÃ¡u_thá»© báº£y'.split('_'),
    weekdaysShort : 'CN_T2_T3_T4_T5_T6_T7'.split('_'),
    weekdaysMin : 'CN_T2_T3_T4_T5_T6_T7'.split('_'),
    weekdaysParseExact : true,
    meridiemParse: /sa|ch/i,
    isPM : function (input) {
        return /^ch$/i.test(input);
    },
    meridiem : function (hours, minutes, isLower) {
        if (hours < 12) {
            return isLower ? 'sa' : 'SA';
        } else {
            return isLower ? 'ch' : 'CH';
        }
    },
    longDateFormat : {
        LT : 'HH:mm',
        LTS : 'HH:mm:ss',
        L : 'DD/MM/YYYY',
        LL : 'D MMMM [nÄm] YYYY',
        LLL : 'D MMMM [nÄm] YYYY HH:mm',
        LLLL : 'dddd, D MMMM [nÄm] YYYY HH:mm',
        l : 'DD/M/YYYY',
        ll : 'D MMM YYYY',
        lll : 'D MMM YYYY HH:mm',
        llll : 'ddd, D MMM YYYY HH:mm'
    },
    calendar : {
        sameDay: '[HÃ´m nay lÃºc] LT',
        nextDay: '[NgÃ y mai lÃºc] LT',
        nextWeek: 'dddd [tuáº§n tá»i lÃºc] LT',
        lastDay: '[HÃ´m qua lÃºc] LT',
        lastWeek: 'dddd [tuáº§n rá»i lÃºc] LT',
        sameElse: 'L'
    },
    relativeTime : {
        future : '%s tá»i',
        past : '%s trÆ°á»c',
        s : 'vÃ i giÃ¢y',
        m : 'má»t phÃºt',
        mm : '%d phÃºt',
        h : 'má»t giá»',
        hh : '%d giá»',
        d : 'má»t ngÃ y',
        dd : '%d ngÃ y',
        M : 'má»t thÃ¡ng',
        MM : '%d thÃ¡ng',
        y : 'má»t nÄm',
        yy : '%d nÄm'
    },
    ordinalParse: /\d{1,2}/,
    ordinal : function (number) {
        return number;
    },
    week : {
        dow : 1, // Monday is the first day of the week.
        doy : 4  // The week that contains Jan 4th is the first week of the year.
    }
});

