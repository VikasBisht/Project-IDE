//! moment.js locale configuration
//! locale : Burmese (my)
//! author : Squar team, mysquar.com

import moment from '../moment';

var symbolMap = {
    '1': 'á',
    '2': 'á',
    '3': 'á',
    '4': 'á',
    '5': 'á',
    '6': 'á',
    '7': 'á',
    '8': 'á',
    '9': 'á',
    '0': 'á'
}, numberMap = {
    'á': '1',
    'á': '2',
    'á': '3',
    'á': '4',
    'á': '5',
    'á': '6',
    'á': '7',
    'á': '8',
    'á': '9',
    'á': '0'
};

export default moment.defineLocale('my', {
    months: 'áááºááá«áá®_áá±áá±á¬áºáá«áá®_áááº_á§áá¼á®_áá±_áá½ááº_áá°áá­á¯ááº_áá¼áá¯ááº_áááºáááºáá¬_á¡á±á¬ááºáá­á¯áá¬_áá­á¯áááºáá¬_áá®áááºáá¬'.split('_'),
    monthsShort: 'áááº_áá±_áááº_áá¼á®_áá±_áá½ááº_áá­á¯ááº_áá¼_áááº_á¡á±á¬ááº_áá­á¯_áá®'.split('_'),
    weekdays: 'ááááºá¹ááá½á±_ááááºá¹áá¬_á¡ááºá¹áá«_áá¯áá¹ááá°á¸_áá¼á¬áááá±á¸_áá±á¬áá¼á¬_ááá±'.split('_'),
    weekdaysShort: 'áá½á±_áá¬_áá«_áá°á¸_áá¼á¬_áá±á¬_áá±'.split('_'),
    weekdaysMin: 'áá½á±_áá¬_áá«_áá°á¸_áá¼á¬_áá±á¬_áá±'.split('_'),

    longDateFormat: {
        LT: 'HH:mm',
        LTS: 'HH:mm:ss',
        L: 'DD/MM/YYYY',
        LL: 'D MMMM YYYY',
        LLL: 'D MMMM YYYY HH:mm',
        LLLL: 'dddd D MMMM YYYY HH:mm'
    },
    calendar: {
        sameDay: '[ááá±.] LT [áá¾á¬]',
        nextDay: '[ááááºáá¼ááº] LT [áá¾á¬]',
        nextWeek: 'dddd LT [áá¾á¬]',
        lastDay: '[ááá±.á] LT [áá¾á¬]',
        lastWeek: '[áá¼á®á¸áá²á·áá±á¬] dddd LT [áá¾á¬]',
        sameElse: 'L'
    },
    relativeTime: {
        future: 'áá¬áááºá· %s áá¾á¬',
        past: 'áá½ááºáá²á·áá±á¬ %s á',
        s: 'ááá¹áááº.á¡áááºá¸áááº',
        m: 'áááºáá­áááº',
        mm: '%d áá­áááº',
        h: 'áááºáá¬áá®',
        hh: '%d áá¬áá®',
        d: 'áááºáááº',
        dd: '%d áááº',
        M: 'áááºá',
        MM: '%d á',
        y: 'áááºáá¾ááº',
        yy: '%d áá¾ááº'
    },
    preparse: function (string) {
        return string.replace(/[áááááááááá]/g, function (match) {
            return numberMap[match];
        });
    },
    postformat: function (string) {
        return string.replace(/\d/g, function (match) {
            return symbolMap[match];
        });
    },
    week: {
        dow: 1, // Monday is the first day of the week.
        doy: 4 // The week that contains Jan 1st is the first week of the year.
    }
});

