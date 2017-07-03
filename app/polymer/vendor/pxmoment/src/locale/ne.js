//! moment.js locale configuration
//! locale : nepali/nepalese
//! author : suvash : https://github.com/suvash

import moment from '../moment';

var symbolMap = {
    '1': 'à¥§',
    '2': 'à¥¨',
    '3': 'à¥©',
    '4': 'à¥ª',
    '5': 'à¥«',
    '6': 'à¥¬',
    '7': 'à¥­',
    '8': 'à¥®',
    '9': 'à¥¯',
    '0': 'à¥¦'
},
numberMap = {
    'à¥§': '1',
    'à¥¨': '2',
    'à¥©': '3',
    'à¥ª': '4',
    'à¥«': '5',
    'à¥¬': '6',
    'à¥­': '7',
    'à¥®': '8',
    'à¥¯': '9',
    'à¥¦': '0'
};

export default moment.defineLocale('ne', {
    months : 'à¤à¤¨à¤µà¤°à¥_à¤«à¥à¤¬à¥à¤°à¥à¤µà¤°à¥_à¤®à¤¾à¤°à¥à¤_à¤à¤ªà¥à¤°à¤¿à¤²_à¤®à¤_à¤à¥à¤¨_à¤à¥à¤²à¤¾à¤_à¤à¤à¤·à¥à¤_à¤¸à¥à¤ªà¥à¤à¥à¤®à¥à¤¬à¤°_à¤à¤à¥à¤à¥à¤¬à¤°_à¤¨à¥à¤­à¥à¤®à¥à¤¬à¤°_à¤¡à¤¿à¤¸à¥à¤®à¥à¤¬à¤°'.split('_'),
    monthsShort : 'à¤à¤¨._à¤«à¥à¤¬à¥à¤°à¥._à¤®à¤¾à¤°à¥à¤_à¤à¤ªà¥à¤°à¤¿._à¤®à¤_à¤à¥à¤¨_à¤à¥à¤²à¤¾à¤._à¤à¤._à¤¸à¥à¤ªà¥à¤._à¤à¤à¥à¤à¥._à¤¨à¥à¤­à¥._à¤¡à¤¿à¤¸à¥.'.split('_'),
    monthsParseExact : true,
    weekdays : 'à¤à¤à¤¤à¤¬à¤¾à¤°_à¤¸à¥à¤®à¤¬à¤¾à¤°_à¤®à¤à¥à¤à¤²à¤¬à¤¾à¤°_à¤¬à¥à¤§à¤¬à¤¾à¤°_à¤¬à¤¿à¤¹à¤¿à¤¬à¤¾à¤°_à¤¶à¥à¤à¥à¤°à¤¬à¤¾à¤°_à¤¶à¤¨à¤¿à¤¬à¤¾à¤°'.split('_'),
    weekdaysShort : 'à¤à¤à¤¤._à¤¸à¥à¤®._à¤®à¤à¥à¤à¤²._à¤¬à¥à¤§._à¤¬à¤¿à¤¹à¤¿._à¤¶à¥à¤à¥à¤°._à¤¶à¤¨à¤¿.'.split('_'),
    weekdaysMin : 'à¤._à¤¸à¥._à¤®à¤._à¤¬à¥._à¤¬à¤¿._à¤¶à¥._à¤¶.'.split('_'),
    weekdaysParseExact : true,
    longDateFormat : {
        LT : 'Aà¤à¥ h:mm à¤¬à¤à¥',
        LTS : 'Aà¤à¥ h:mm:ss à¤¬à¤à¥',
        L : 'DD/MM/YYYY',
        LL : 'D MMMM YYYY',
        LLL : 'D MMMM YYYY, Aà¤à¥ h:mm à¤¬à¤à¥',
        LLLL : 'dddd, D MMMM YYYY, Aà¤à¥ h:mm à¤¬à¤à¥'
    },
    preparse: function (string) {
        return string.replace(/[à¥§à¥¨à¥©à¥ªà¥«à¥¬à¥­à¥®à¥¯à¥¦]/g, function (match) {
            return numberMap[match];
        });
    },
    postformat: function (string) {
        return string.replace(/\d/g, function (match) {
            return symbolMap[match];
        });
    },
    meridiemParse: /à¤°à¤¾à¤¤à¤¿|à¤¬à¤¿à¤¹à¤¾à¤¨|à¤¦à¤¿à¤à¤à¤¸à¥|à¤¸à¤¾à¤à¤/,
    meridiemHour : function (hour, meridiem) {
        if (hour === 12) {
            hour = 0;
        }
        if (meridiem === 'à¤°à¤¾à¤¤à¤¿') {
            return hour < 4 ? hour : hour + 12;
        } else if (meridiem === 'à¤¬à¤¿à¤¹à¤¾à¤¨') {
            return hour;
        } else if (meridiem === 'à¤¦à¤¿à¤à¤à¤¸à¥') {
            return hour >= 10 ? hour : hour + 12;
        } else if (meridiem === 'à¤¸à¤¾à¤à¤') {
            return hour + 12;
        }
    },
    meridiem : function (hour, minute, isLower) {
        if (hour < 3) {
            return 'à¤°à¤¾à¤¤à¤¿';
        } else if (hour < 12) {
            return 'à¤¬à¤¿à¤¹à¤¾à¤¨';
        } else if (hour < 16) {
            return 'à¤¦à¤¿à¤à¤à¤¸à¥';
        } else if (hour < 20) {
            return 'à¤¸à¤¾à¤à¤';
        } else {
            return 'à¤°à¤¾à¤¤à¤¿';
        }
    },
    calendar : {
        sameDay : '[à¤à¤] LT',
        nextDay : '[à¤­à¥à¤²à¤¿] LT',
        nextWeek : '[à¤à¤à¤à¤¦à¥] dddd[,] LT',
        lastDay : '[à¤¹à¤¿à¤à¥] LT',
        lastWeek : '[à¤à¤à¤à¥] dddd[,] LT',
        sameElse : 'L'
    },
    relativeTime : {
        future : '%sà¤®à¤¾',
        past : '%s à¤à¤à¤¾à¤¡à¤¿',
        s : 'à¤à¥à¤¹à¥ à¤à¥à¤·à¤£',
        m : 'à¤à¤ à¤®à¤¿à¤¨à¥à¤',
        mm : '%d à¤®à¤¿à¤¨à¥à¤',
        h : 'à¤à¤ à¤à¤£à¥à¤à¤¾',
        hh : '%d à¤à¤£à¥à¤à¤¾',
        d : 'à¤à¤ à¤¦à¤¿à¤¨',
        dd : '%d à¤¦à¤¿à¤¨',
        M : 'à¤à¤ à¤®à¤¹à¤¿à¤¨à¤¾',
        MM : '%d à¤®à¤¹à¤¿à¤¨à¤¾',
        y : 'à¤à¤ à¤¬à¤°à¥à¤·',
        yy : '%d à¤¬à¤°à¥à¤·'
    },
    week : {
        dow : 0, // Sunday is the first day of the week.
        doy : 6  // The week that contains Jan 1st is the first week of the year.
    }
});

