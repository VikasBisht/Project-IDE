//! moment.js locale configuration
//! locale : malayalam (ml)
//! author : Floyd Pink : https://github.com/floydpink

;(function (global, factory) {
   typeof exports === 'object' && typeof module !== 'undefined'
       && typeof require === 'function' ? factory(require('../moment')) :
   typeof define === 'function' && define.amd ? define(['moment'], factory) :
   factory(global.moment)
}(this, function (moment) { 'use strict';


    var ml = moment.defineLocale('ml', {
        months : 'à´à´¨àµà´µà´°à´¿_à´«àµà´¬àµà´°àµà´µà´°à´¿_à´®à´¾àµ¼à´àµà´àµ_à´à´ªàµà´°à´¿àµ½_à´®àµà´¯àµ_à´àµàµº_à´àµà´²àµ_à´à´à´¸àµà´±àµà´±àµ_à´¸àµà´ªàµà´±àµà´±à´à´¬àµ¼_à´à´àµà´àµà´¬àµ¼_à´¨à´µà´à´¬àµ¼_à´¡à´¿à´¸à´à´¬àµ¼'.split('_'),
        monthsShort : 'à´à´¨àµ._à´«àµà´¬àµà´°àµ._à´®à´¾àµ¼._à´à´ªàµà´°à´¿._à´®àµà´¯àµ_à´àµàµº_à´àµà´²àµ._à´à´._à´¸àµà´ªàµà´±àµà´±._à´à´àµà´àµ._à´¨à´µà´._à´¡à´¿à´¸à´.'.split('_'),
        monthsParseExact : true,
        weekdays : 'à´à´¾à´¯à´±à´¾à´´àµà´_à´¤à´¿à´àµà´à´³à´¾à´´àµà´_à´àµà´µàµà´µà´¾à´´àµà´_à´¬àµà´§à´¨à´¾à´´àµà´_à´µàµà´¯à´¾à´´à´¾à´´àµà´_à´µàµà´³àµà´³à´¿à´¯à´¾à´´àµà´_à´¶à´¨à´¿à´¯à´¾à´´àµà´'.split('_'),
        weekdaysShort : 'à´à´¾à´¯àµ¼_à´¤à´¿à´àµà´àµ¾_à´àµà´µàµà´µ_à´¬àµà´§àµ»_à´µàµà´¯à´¾à´´à´_à´µàµà´³àµà´³à´¿_à´¶à´¨à´¿'.split('_'),
        weekdaysMin : 'à´à´¾_à´¤à´¿_à´àµ_à´¬àµ_à´µàµà´¯à´¾_à´µàµ_à´¶'.split('_'),
        longDateFormat : {
            LT : 'A h:mm -à´¨àµ',
            LTS : 'A h:mm:ss -à´¨àµ',
            L : 'DD/MM/YYYY',
            LL : 'D MMMM YYYY',
            LLL : 'D MMMM YYYY, A h:mm -à´¨àµ',
            LLLL : 'dddd, D MMMM YYYY, A h:mm -à´¨àµ'
        },
        calendar : {
            sameDay : '[à´à´¨àµà´¨àµ] LT',
            nextDay : '[à´¨à´¾à´³àµ] LT',
            nextWeek : 'dddd, LT',
            lastDay : '[à´à´¨àµà´¨à´²àµ] LT',
            lastWeek : '[à´à´´à´¿à´àµà´] dddd, LT',
            sameElse : 'L'
        },
        relativeTime : {
            future : '%s à´à´´à´¿à´àµà´àµ',
            past : '%s à´®àµàµ»à´ªàµ',
            s : 'à´àµ½à´ª à´¨à´¿à´®à´¿à´·à´àµà´àµ¾',
            m : 'à´à´°àµ à´®à´¿à´¨à´¿à´±àµà´±àµ',
            mm : '%d à´®à´¿à´¨à´¿à´±àµà´±àµ',
            h : 'à´à´°àµ à´®à´£à´¿à´àµà´àµàµ¼',
            hh : '%d à´®à´£à´¿à´àµà´àµàµ¼',
            d : 'à´à´°àµ à´¦à´¿à´µà´¸à´',
            dd : '%d à´¦à´¿à´µà´¸à´',
            M : 'à´à´°àµ à´®à´¾à´¸à´',
            MM : '%d à´®à´¾à´¸à´',
            y : 'à´à´°àµ à´µàµ¼à´·à´',
            yy : '%d à´µàµ¼à´·à´'
        },
        meridiemParse: /à´°à´¾à´¤àµà´°à´¿|à´°à´¾à´µà´¿à´²àµ|à´à´àµà´ à´à´´à´¿à´àµà´àµ|à´µàµà´àµà´¨àµà´¨àµà´°à´|à´°à´¾à´¤àµà´°à´¿/i,
        meridiemHour : function (hour, meridiem) {
            if (hour === 12) {
                hour = 0;
            }
            if ((meridiem === 'à´°à´¾à´¤àµà´°à´¿' && hour >= 4) ||
                    meridiem === 'à´à´àµà´ à´à´´à´¿à´àµà´àµ' ||
                    meridiem === 'à´µàµà´àµà´¨àµà´¨àµà´°à´') {
                return hour + 12;
            } else {
                return hour;
            }
        },
        meridiem : function (hour, minute, isLower) {
            if (hour < 4) {
                return 'à´°à´¾à´¤àµà´°à´¿';
            } else if (hour < 12) {
                return 'à´°à´¾à´µà´¿à´²àµ';
            } else if (hour < 17) {
                return 'à´à´àµà´ à´à´´à´¿à´àµà´àµ';
            } else if (hour < 20) {
                return 'à´µàµà´àµà´¨àµà´¨àµà´°à´';
            } else {
                return 'à´°à´¾à´¤àµà´°à´¿';
            }
        }
    });

    return ml;

}));