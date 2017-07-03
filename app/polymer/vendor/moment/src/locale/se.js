//! moment.js locale configuration
//! locale : Northern Sami [se]
//! authors : BÃ¥rd Rolstad Henriksen : https://github.com/karamell


import moment from '../moment';

export default moment.defineLocale('se', {
    months : 'oÄÄajagemÃ¡nnu_guovvamÃ¡nnu_njukÄamÃ¡nnu_cuoÅomÃ¡nnu_miessemÃ¡nnu_geassemÃ¡nnu_suoidnemÃ¡nnu_borgemÃ¡nnu_ÄakÄamÃ¡nnu_golggotmÃ¡nnu_skÃ¡bmamÃ¡nnu_juovlamÃ¡nnu'.split('_'),
    monthsShort : 'oÄÄj_guov_njuk_cuo_mies_geas_suoi_borg_ÄakÄ_golg_skÃ¡b_juov'.split('_'),
    weekdays : 'sotnabeaivi_vuossÃ¡rga_maÅÅebÃ¡rga_gaskavahkku_duorastat_bearjadat_lÃ¡vvardat'.split('_'),
    weekdaysShort : 'sotn_vuos_maÅ_gask_duor_bear_lÃ¡v'.split('_'),
    weekdaysMin : 's_v_m_g_d_b_L'.split('_'),
    longDateFormat : {
        LT : 'HH:mm',
        LTS : 'HH:mm:ss',
        L : 'DD.MM.YYYY',
        LL : 'MMMM D. [b.] YYYY',
        LLL : 'MMMM D. [b.] YYYY [ti.] HH:mm',
        LLLL : 'dddd, MMMM D. [b.] YYYY [ti.] HH:mm'
    },
    calendar : {
        sameDay: '[otne ti] LT',
        nextDay: '[ihttin ti] LT',
        nextWeek: 'dddd [ti] LT',
        lastDay: '[ikte ti] LT',
        lastWeek: '[ovddit] dddd [ti] LT',
        sameElse: 'L'
    },
    relativeTime : {
        future : '%s geaÅ¾es',
        past : 'maÅit %s',
        s : 'moadde sekunddat',
        m : 'okta minuhta',
        mm : '%d minuhtat',
        h : 'okta diimmu',
        hh : '%d diimmut',
        d : 'okta beaivi',
        dd : '%d beaivvit',
        M : 'okta mÃ¡nnu',
        MM : '%d mÃ¡nut',
        y : 'okta jahki',
        yy : '%d jagit'
    },
    ordinalParse: /\d{1,2}\./,
    ordinal : '%d.',
    week : {
        dow : 1, // Monday is the first day of the week.
        doy : 4  // The week that contains Jan 4th is the first week of the year.
    }
});
