//! moment.js locale configuration
//! locale : Bengali [bn]
//! author : Kaushik Gandhi : https://github.com/kaushikgandhi

import moment from '../moment';

var symbolMap = {
    '1': 'à§§',
    '2': 'à§¨',
    '3': 'à§©',
    '4': 'à§ª',
    '5': 'à§«',
    '6': 'à§¬',
    '7': 'à§­',
    '8': 'à§®',
    '9': 'à§¯',
    '0': 'à§¦'
},
numberMap = {
    'à§§': '1',
    'à§¨': '2',
    'à§©': '3',
    'à§ª': '4',
    'à§«': '5',
    'à§¬': '6',
    'à§­': '7',
    'à§®': '8',
    'à§¯': '9',
    'à§¦': '0'
};

export default moment.defineLocale('bn', {
    months : 'à¦à¦¾à¦¨à§à§à¦¾à¦°à§_à¦«à§à¦¬à§à¦°à§à§à¦¾à¦°à¦¿_à¦®à¦¾à¦°à§à¦_à¦à¦ªà§à¦°à¦¿à¦²_à¦®à§_à¦à§à¦¨_à¦à§à¦²à¦¾à¦_à¦à¦à¦¸à§à¦_à¦¸à§à¦ªà§à¦à§à¦®à§à¦¬à¦°_à¦à¦à§à¦à§à¦¬à¦°_à¦¨à¦­à§à¦®à§à¦¬à¦°_à¦¡à¦¿à¦¸à§à¦®à§à¦¬à¦°'.split('_'),
    monthsShort : 'à¦à¦¾à¦¨à§_à¦«à§à¦¬_à¦®à¦¾à¦°à§à¦_à¦à¦ªà§à¦°_à¦®à§_à¦à§à¦¨_à¦à§à¦²_à¦à¦_à¦¸à§à¦ªà§à¦_à¦à¦à§à¦à§_à¦¨à¦­à§_à¦¡à¦¿à¦¸à§'.split('_'),
    weekdays : 'à¦°à¦¬à¦¿à¦¬à¦¾à¦°_à¦¸à§à¦®à¦¬à¦¾à¦°_à¦®à¦à§à¦à¦²à¦¬à¦¾à¦°_à¦¬à§à¦§à¦¬à¦¾à¦°_à¦¬à§à¦¹à¦¸à§à¦ªà¦¤à¦¿à¦¬à¦¾à¦°_à¦¶à§à¦à§à¦°à¦¬à¦¾à¦°_à¦¶à¦¨à¦¿à¦¬à¦¾à¦°'.split('_'),
    weekdaysShort : 'à¦°à¦¬à¦¿_à¦¸à§à¦®_à¦®à¦à§à¦à¦²_à¦¬à§à¦§_à¦¬à§à¦¹à¦¸à§à¦ªà¦¤à¦¿_à¦¶à§à¦à§à¦°_à¦¶à¦¨à¦¿'.split('_'),
    weekdaysMin : 'à¦°à¦¬à¦¿_à¦¸à§à¦®_à¦®à¦à§à¦_à¦¬à§à¦§_à¦¬à§à¦¹à¦_à¦¶à§à¦à§à¦°_à¦¶à¦¨à¦¿'.split('_'),
    longDateFormat : {
        LT : 'A h:mm à¦¸à¦®à§',
        LTS : 'A h:mm:ss à¦¸à¦®à§',
        L : 'DD/MM/YYYY',
        LL : 'D MMMM YYYY',
        LLL : 'D MMMM YYYY, A h:mm à¦¸à¦®à§',
        LLLL : 'dddd, D MMMM YYYY, A h:mm à¦¸à¦®à§'
    },
    calendar : {
        sameDay : '[à¦à¦] LT',
        nextDay : '[à¦à¦à¦¾à¦®à§à¦à¦¾à¦²] LT',
        nextWeek : 'dddd, LT',
        lastDay : '[à¦à¦¤à¦à¦¾à¦²] LT',
        lastWeek : '[à¦à¦¤] dddd, LT',
        sameElse : 'L'
    },
    relativeTime : {
        future : '%s à¦ªà¦°à§',
        past : '%s à¦à¦à§',
        s : 'à¦à§à§à¦ à¦¸à§à¦à§à¦¨à§à¦¡',
        m : 'à¦à¦ à¦®à¦¿à¦¨à¦¿à¦',
        mm : '%d à¦®à¦¿à¦¨à¦¿à¦',
        h : 'à¦à¦ à¦à¦¨à§à¦à¦¾',
        hh : '%d à¦à¦¨à§à¦à¦¾',
        d : 'à¦à¦ à¦¦à¦¿à¦¨',
        dd : '%d à¦¦à¦¿à¦¨',
        M : 'à¦à¦ à¦®à¦¾à¦¸',
        MM : '%d à¦®à¦¾à¦¸',
        y : 'à¦à¦ à¦¬à¦à¦°',
        yy : '%d à¦¬à¦à¦°'
    },
    preparse: function (string) {
        return string.replace(/[à§§à§¨à§©à§ªà§«à§¬à§­à§®à§¯à§¦]/g, function (match) {
            return numberMap[match];
        });
    },
    postformat: function (string) {
        return string.replace(/\d/g, function (match) {
            return symbolMap[match];
        });
    },
    meridiemParse: /à¦°à¦¾à¦¤|à¦¸à¦à¦¾à¦²|à¦¦à§à¦ªà§à¦°|à¦¬à¦¿à¦à¦¾à¦²|à¦°à¦¾à¦¤/,
    meridiemHour : function (hour, meridiem) {
        if (hour === 12) {
            hour = 0;
        }
        if ((meridiem === 'à¦°à¦¾à¦¤' && hour >= 4) ||
                (meridiem === 'à¦¦à§à¦ªà§à¦°' && hour < 5) ||
                meridiem === 'à¦¬à¦¿à¦à¦¾à¦²') {
            return hour + 12;
        } else {
            return hour;
        }
    },
    meridiem : function (hour, minute, isLower) {
        if (hour < 4) {
            return 'à¦°à¦¾à¦¤';
        } else if (hour < 10) {
            return 'à¦¸à¦à¦¾à¦²';
        } else if (hour < 17) {
            return 'à¦¦à§à¦ªà§à¦°';
        } else if (hour < 20) {
            return 'à¦¬à¦¿à¦à¦¾à¦²';
        } else {
            return 'à¦°à¦¾à¦¤';
        }
    },
    week : {
        dow : 0, // Sunday is the first day of the week.
        doy : 6  // The week that contains Jan 1st is the first week of the year.
    }
});
