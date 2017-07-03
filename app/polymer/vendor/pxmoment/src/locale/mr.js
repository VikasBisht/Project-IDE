//! moment.js locale configuration
//! locale : Marathi (mr)
//! author : Harshad Kale : https://github.com/kalehv
//! author : Vivek Athalye : https://github.com/vnathalye

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

function relativeTimeMr(number, withoutSuffix, string, isFuture)
{
    var output = '';
    if (withoutSuffix) {
        switch (string) {
            case 's': output = 'à¤à¤¾à¤¹à¥ à¤¸à¥à¤à¤à¤¦'; break;
            case 'm': output = 'à¤à¤ à¤®à¤¿à¤¨à¤¿à¤'; break;
            case 'mm': output = '%d à¤®à¤¿à¤¨à¤¿à¤à¥'; break;
            case 'h': output = 'à¤à¤ à¤¤à¤¾à¤¸'; break;
            case 'hh': output = '%d à¤¤à¤¾à¤¸'; break;
            case 'd': output = 'à¤à¤ à¤¦à¤¿à¤µà¤¸'; break;
            case 'dd': output = '%d à¤¦à¤¿à¤µà¤¸'; break;
            case 'M': output = 'à¤à¤ à¤®à¤¹à¤¿à¤¨à¤¾'; break;
            case 'MM': output = '%d à¤®à¤¹à¤¿à¤¨à¥'; break;
            case 'y': output = 'à¤à¤ à¤µà¤°à¥à¤·'; break;
            case 'yy': output = '%d à¤µà¤°à¥à¤·à¥'; break;
        }
    }
    else {
        switch (string) {
            case 's': output = 'à¤à¤¾à¤¹à¥ à¤¸à¥à¤à¤à¤¦à¤¾à¤'; break;
            case 'm': output = 'à¤à¤à¤¾ à¤®à¤¿à¤¨à¤¿à¤à¤¾'; break;
            case 'mm': output = '%d à¤®à¤¿à¤¨à¤¿à¤à¤¾à¤'; break;
            case 'h': output = 'à¤à¤à¤¾ à¤¤à¤¾à¤¸à¤¾'; break;
            case 'hh': output = '%d à¤¤à¤¾à¤¸à¤¾à¤'; break;
            case 'd': output = 'à¤à¤à¤¾ à¤¦à¤¿à¤µà¤¸à¤¾'; break;
            case 'dd': output = '%d à¤¦à¤¿à¤µà¤¸à¤¾à¤'; break;
            case 'M': output = 'à¤à¤à¤¾ à¤®à¤¹à¤¿à¤¨à¥à¤¯à¤¾'; break;
            case 'MM': output = '%d à¤®à¤¹à¤¿à¤¨à¥à¤¯à¤¾à¤'; break;
            case 'y': output = 'à¤à¤à¤¾ à¤µà¤°à¥à¤·à¤¾'; break;
            case 'yy': output = '%d à¤µà¤°à¥à¤·à¤¾à¤'; break;
        }
    }
    return output.replace(/%d/i, number);
}

export default moment.defineLocale('mr', {
    months : 'à¤à¤¾à¤¨à¥à¤µà¤¾à¤°à¥_à¤«à¥à¤¬à¥à¤°à¥à¤µà¤¾à¤°à¥_à¤®à¤¾à¤°à¥à¤_à¤à¤ªà¥à¤°à¤¿à¤²_à¤®à¥_à¤à¥à¤¨_à¤à¥à¤²à¥_à¤à¤à¤¸à¥à¤_à¤¸à¤ªà¥à¤à¥à¤à¤¬à¤°_à¤à¤à¥à¤à¥à¤¬à¤°_à¤¨à¥à¤µà¥à¤¹à¥à¤à¤¬à¤°_à¤¡à¤¿à¤¸à¥à¤à¤¬à¤°'.split('_'),
    monthsShort: 'à¤à¤¾à¤¨à¥._à¤«à¥à¤¬à¥à¤°à¥._à¤®à¤¾à¤°à¥à¤._à¤à¤ªà¥à¤°à¤¿._à¤®à¥._à¤à¥à¤¨._à¤à¥à¤²à¥._à¤à¤._à¤¸à¤ªà¥à¤à¥à¤._à¤à¤à¥à¤à¥._à¤¨à¥à¤µà¥à¤¹à¥à¤._à¤¡à¤¿à¤¸à¥à¤.'.split('_'),
    monthsParseExact : true,
    weekdays : 'à¤°à¤µà¤¿à¤µà¤¾à¤°_à¤¸à¥à¤®à¤µà¤¾à¤°_à¤®à¤à¤à¤³à¤µà¤¾à¤°_à¤¬à¥à¤§à¤µà¤¾à¤°_à¤à¥à¤°à¥à¤µà¤¾à¤°_à¤¶à¥à¤à¥à¤°à¤µà¤¾à¤°_à¤¶à¤¨à¤¿à¤µà¤¾à¤°'.split('_'),
    weekdaysShort : 'à¤°à¤µà¤¿_à¤¸à¥à¤®_à¤®à¤à¤à¤³_à¤¬à¥à¤§_à¤à¥à¤°à¥_à¤¶à¥à¤à¥à¤°_à¤¶à¤¨à¤¿'.split('_'),
    weekdaysMin : 'à¤°_à¤¸à¥_à¤®à¤_à¤¬à¥_à¤à¥_à¤¶à¥_à¤¶'.split('_'),
    longDateFormat : {
        LT : 'A h:mm à¤µà¤¾à¤à¤¤à¤¾',
        LTS : 'A h:mm:ss à¤µà¤¾à¤à¤¤à¤¾',
        L : 'DD/MM/YYYY',
        LL : 'D MMMM YYYY',
        LLL : 'D MMMM YYYY, A h:mm à¤µà¤¾à¤à¤¤à¤¾',
        LLLL : 'dddd, D MMMM YYYY, A h:mm à¤µà¤¾à¤à¤¤à¤¾'
    },
    calendar : {
        sameDay : '[à¤à¤] LT',
        nextDay : '[à¤à¤¦à¥à¤¯à¤¾] LT',
        nextWeek : 'dddd, LT',
        lastDay : '[à¤à¤¾à¤²] LT',
        lastWeek: '[à¤®à¤¾à¤à¥à¤²] dddd, LT',
        sameElse : 'L'
    },
    relativeTime : {
        future: '%sà¤®à¤§à¥à¤¯à¥',
        past: '%sà¤ªà¥à¤°à¥à¤µà¥',
        s: relativeTimeMr,
        m: relativeTimeMr,
        mm: relativeTimeMr,
        h: relativeTimeMr,
        hh: relativeTimeMr,
        d: relativeTimeMr,
        dd: relativeTimeMr,
        M: relativeTimeMr,
        MM: relativeTimeMr,
        y: relativeTimeMr,
        yy: relativeTimeMr
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
    meridiemParse: /à¤°à¤¾à¤¤à¥à¤°à¥|à¤¸à¤à¤¾à¤³à¥|à¤¦à¥à¤ªà¤¾à¤°à¥|à¤¸à¤¾à¤¯à¤à¤à¤¾à¤³à¥/,
    meridiemHour : function (hour, meridiem) {
        if (hour === 12) {
            hour = 0;
        }
        if (meridiem === 'à¤°à¤¾à¤¤à¥à¤°à¥') {
            return hour < 4 ? hour : hour + 12;
        } else if (meridiem === 'à¤¸à¤à¤¾à¤³à¥') {
            return hour;
        } else if (meridiem === 'à¤¦à¥à¤ªà¤¾à¤°à¥') {
            return hour >= 10 ? hour : hour + 12;
        } else if (meridiem === 'à¤¸à¤¾à¤¯à¤à¤à¤¾à¤³à¥') {
            return hour + 12;
        }
    },
    meridiem: function (hour, minute, isLower) {
        if (hour < 4) {
            return 'à¤°à¤¾à¤¤à¥à¤°à¥';
        } else if (hour < 10) {
            return 'à¤¸à¤à¤¾à¤³à¥';
        } else if (hour < 17) {
            return 'à¤¦à¥à¤ªà¤¾à¤°à¥';
        } else if (hour < 20) {
            return 'à¤¸à¤¾à¤¯à¤à¤à¤¾à¤³à¥';
        } else {
            return 'à¤°à¤¾à¤¤à¥à¤°à¥';
        }
    },
    week : {
        dow : 0, // Sunday is the first day of the week.
        doy : 6  // The week that contains Jan 1st is the first week of the year.
    }
});

