//! moment.js locale configuration
//! locale : Hebrew (he)
//! author : Tomer Cohen : https://github.com/tomer
//! author : Moshe Simantov : https://github.com/DevelopmentIL
//! author : Tal Ater : https://github.com/TalAter

import moment from '../moment';

export default moment.defineLocale('he', {
    months : '×× ×××¨_×¤××¨×××¨_××¨×¥_××¤×¨××_×××_××× ×_××××_×××××¡×_×¡×¤××××¨_×××§××××¨_× ×××××¨_××¦×××¨'.split('_'),
    monthsShort : '×× ××³_×¤××¨×³_××¨×¥_××¤×¨×³_×××_××× ×_××××_××××³_×¡×¤××³_×××§×³_× ×××³_××¦××³'.split('_'),
    weekdays : '×¨××©××_×©× ×_×©×××©×_×¨×××¢×_××××©×_×©××©×_×©××ª'.split('_'),
    weekdaysShort : '××³_××³_××³_××³_××³_××³_×©×³'.split('_'),
    weekdaysMin : '×_×_×_×_×_×_×©'.split('_'),
    longDateFormat : {
        LT : 'HH:mm',
        LTS : 'HH:mm:ss',
        L : 'DD/MM/YYYY',
        LL : 'D [×]MMMM YYYY',
        LLL : 'D [×]MMMM YYYY HH:mm',
        LLLL : 'dddd, D [×]MMMM YYYY HH:mm',
        l : 'D/M/YYYY',
        ll : 'D MMM YYYY',
        lll : 'D MMM YYYY HH:mm',
        llll : 'ddd, D MMM YYYY HH:mm'
    },
    calendar : {
        sameDay : '[×××× ×Ö¾]LT',
        nextDay : '[×××¨ ×Ö¾]LT',
        nextWeek : 'dddd [××©×¢×] LT',
        lastDay : '[××ª××× ×Ö¾]LT',
        lastWeek : '[××××] dddd [××××¨×× ××©×¢×] LT',
        sameElse : 'L'
    },
    relativeTime : {
        future : '××¢×× %s',
        past : '××¤× × %s',
        s : '××¡×¤×¨ ×©× ×××ª',
        m : '××§×',
        mm : '%d ××§××ª',
        h : '×©×¢×',
        hh : function (number) {
            if (number === 2) {
                return '×©×¢×ª×××';
            }
            return number + ' ×©×¢××ª';
        },
        d : '×××',
        dd : function (number) {
            if (number === 2) {
                return '××××××';
            }
            return number + ' ××××';
        },
        M : '××××©',
        MM : function (number) {
            if (number === 2) {
                return '××××©×××';
            }
            return number + ' ××××©××';
        },
        y : '×©× ×',
        yy : function (number) {
            if (number === 2) {
                return '×©× ×ª×××';
            } else if (number % 10 === 0 && number !== 10) {
                return number + ' ×©× ×';
            }
            return number + ' ×©× ××';
        }
    },
    meridiemParse: /×××"×¦|××¤× ×"×¦|×××¨× ××¦××¨×××|××¤× × ××¦××¨×××|××¤× ××ª ×××§×¨|××××§×¨|××¢×¨×/i,
    isPM : function (input) {
        return /^(×××"×¦|×××¨× ××¦××¨×××|××¢×¨×)$/.test(input);
    },
    meridiem : function (hour, minute, isLower) {
        if (hour < 5) {
            return '××¤× ××ª ×××§×¨';
        } else if (hour < 10) {
            return '××××§×¨';
        } else if (hour < 12) {
            return isLower ? '××¤× ×"×¦' : '××¤× × ××¦××¨×××';
        } else if (hour < 18) {
            return isLower ? '×××"×¦' : '×××¨× ××¦××¨×××';
        } else {
            return '××¢×¨×';
        }
    }
});

