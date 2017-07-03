//! moment.js locale configuration
//! locale : latvian (lv)
//! author : Kristaps Karlsons : https://github.com/skakri
//! author : JÄnis Elmeris : https://github.com/JanisE

;(function (global, factory) {
   typeof exports === 'object' && typeof module !== 'undefined'
       && typeof require === 'function' ? factory(require('../moment')) :
   typeof define === 'function' && define.amd ? define(['moment'], factory) :
   factory(global.moment)
}(this, function (moment) { 'use strict';


    var units = {
        'm': 'minÅ«tes_minÅ«tÄm_minÅ«te_minÅ«tes'.split('_'),
        'mm': 'minÅ«tes_minÅ«tÄm_minÅ«te_minÅ«tes'.split('_'),
        'h': 'stundas_stundÄm_stunda_stundas'.split('_'),
        'hh': 'stundas_stundÄm_stunda_stundas'.split('_'),
        'd': 'dienas_dienÄm_diena_dienas'.split('_'),
        'dd': 'dienas_dienÄm_diena_dienas'.split('_'),
        'M': 'mÄneÅ¡a_mÄneÅ¡iem_mÄnesis_mÄneÅ¡i'.split('_'),
        'MM': 'mÄneÅ¡a_mÄneÅ¡iem_mÄnesis_mÄneÅ¡i'.split('_'),
        'y': 'gada_gadiem_gads_gadi'.split('_'),
        'yy': 'gada_gadiem_gads_gadi'.split('_')
    };
    /**
     * @param withoutSuffix boolean true = a length of time; false = before/after a period of time.
     */
    function format(forms, number, withoutSuffix) {
        if (withoutSuffix) {
            // E.g. "21 minÅ«te", "3 minÅ«tes".
            return number % 10 === 1 && number !== 11 ? forms[2] : forms[3];
        } else {
            // E.g. "21 minÅ«tes" as in "pÄc 21 minÅ«tes".
            // E.g. "3 minÅ«tÄm" as in "pÄc 3 minÅ«tÄm".
            return number % 10 === 1 && number !== 11 ? forms[0] : forms[1];
        }
    }
    function relativeTimeWithPlural(number, withoutSuffix, key) {
        return number + ' ' + format(units[key], number, withoutSuffix);
    }
    function relativeTimeWithSingular(number, withoutSuffix, key) {
        return format(units[key], number, withoutSuffix);
    }
    function relativeSeconds(number, withoutSuffix) {
        return withoutSuffix ? 'daÅ¾as sekundes' : 'daÅ¾Äm sekundÄm';
    }

    var lv = moment.defineLocale('lv', {
        months : 'janvÄris_februÄris_marts_aprÄ«lis_maijs_jÅ«nijs_jÅ«lijs_augusts_septembris_oktobris_novembris_decembris'.split('_'),
        monthsShort : 'jan_feb_mar_apr_mai_jÅ«n_jÅ«l_aug_sep_okt_nov_dec'.split('_'),
        weekdays : 'svÄtdiena_pirmdiena_otrdiena_treÅ¡diena_ceturtdiena_piektdiena_sestdiena'.split('_'),
        weekdaysShort : 'Sv_P_O_T_C_Pk_S'.split('_'),
        weekdaysMin : 'Sv_P_O_T_C_Pk_S'.split('_'),
        weekdaysParseExact : true,
        longDateFormat : {
            LT : 'HH:mm',
            LTS : 'HH:mm:ss',
            L : 'DD.MM.YYYY.',
            LL : 'YYYY. [gada] D. MMMM',
            LLL : 'YYYY. [gada] D. MMMM, HH:mm',
            LLLL : 'YYYY. [gada] D. MMMM, dddd, HH:mm'
        },
        calendar : {
            sameDay : '[Å odien pulksten] LT',
            nextDay : '[RÄ«t pulksten] LT',
            nextWeek : 'dddd [pulksten] LT',
            lastDay : '[Vakar pulksten] LT',
            lastWeek : '[PagÄjuÅ¡Ä] dddd [pulksten] LT',
            sameElse : 'L'
        },
        relativeTime : {
            future : 'pÄc %s',
            past : 'pirms %s',
            s : relativeSeconds,
            m : relativeTimeWithSingular,
            mm : relativeTimeWithPlural,
            h : relativeTimeWithSingular,
            hh : relativeTimeWithPlural,
            d : relativeTimeWithSingular,
            dd : relativeTimeWithPlural,
            M : relativeTimeWithSingular,
            MM : relativeTimeWithPlural,
            y : relativeTimeWithSingular,
            yy : relativeTimeWithPlural
        },
        ordinalParse: /\d{1,2}\./,
        ordinal : '%d.',
        week : {
            dow : 1, // Monday is the first day of the week.
            doy : 4  // The week that contains Jan 4th is the first week of the year.
        }
    });

    return lv;

}));