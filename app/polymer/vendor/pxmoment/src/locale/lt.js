//! moment.js locale configuration
//! locale : Lithuanian (lt)
//! author : Mindaugas MozÅ«ras : https://github.com/mmozuras

import moment from '../moment';

var units = {
    'm' : 'minutÄ_minutÄs_minutÄ',
    'mm': 'minutÄs_minuÄiÅ³_minutes',
    'h' : 'valanda_valandos_valandÄ',
    'hh': 'valandos_valandÅ³_valandas',
    'd' : 'diena_dienos_dienÄ',
    'dd': 'dienos_dienÅ³_dienas',
    'M' : 'mÄnuo_mÄnesio_mÄnesÄ¯',
    'MM': 'mÄnesiai_mÄnesiÅ³_mÄnesius',
    'y' : 'metai_metÅ³_metus',
    'yy': 'metai_metÅ³_metus'
};
function translateSeconds(number, withoutSuffix, key, isFuture) {
    if (withoutSuffix) {
        return 'kelios sekundÄs';
    } else {
        return isFuture ? 'keliÅ³ sekundÅ¾iÅ³' : 'kelias sekundes';
    }
}
function translateSingular(number, withoutSuffix, key, isFuture) {
    return withoutSuffix ? forms(key)[0] : (isFuture ? forms(key)[1] : forms(key)[2]);
}
function special(number) {
    return number % 10 === 0 || (number > 10 && number < 20);
}
function forms(key) {
    return units[key].split('_');
}
function translate(number, withoutSuffix, key, isFuture) {
    var result = number + ' ';
    if (number === 1) {
        return result + translateSingular(number, withoutSuffix, key[0], isFuture);
    } else if (withoutSuffix) {
        return result + (special(number) ? forms(key)[1] : forms(key)[0]);
    } else {
        if (isFuture) {
            return result + forms(key)[1];
        } else {
            return result + (special(number) ? forms(key)[1] : forms(key)[2]);
        }
    }
}
export default moment.defineLocale('lt', {
    months : {
        format: 'sausio_vasario_kovo_balandÅ¾io_geguÅ¾Äs_birÅ¾elio_liepos_rugpjÅ«Äio_rugsÄjo_spalio_lapkriÄio_gruodÅ¾io'.split('_'),
        standalone: 'sausis_vasaris_kovas_balandis_geguÅ¾Ä_birÅ¾elis_liepa_rugpjÅ«tis_rugsÄjis_spalis_lapkritis_gruodis'.split('_')
    },
    monthsShort : 'sau_vas_kov_bal_geg_bir_lie_rgp_rgs_spa_lap_grd'.split('_'),
    weekdays : {
        format: 'sekmadienÄ¯_pirmadienÄ¯_antradienÄ¯_treÄiadienÄ¯_ketvirtadienÄ¯_penktadienÄ¯_Å¡eÅ¡tadienÄ¯'.split('_'),
        standalone: 'sekmadienis_pirmadienis_antradienis_treÄiadienis_ketvirtadienis_penktadienis_Å¡eÅ¡tadienis'.split('_'),
        isFormat: /dddd HH:mm/
    },
    weekdaysShort : 'Sek_Pir_Ant_Tre_Ket_Pen_Å eÅ¡'.split('_'),
    weekdaysMin : 'S_P_A_T_K_Pn_Å '.split('_'),
    weekdaysParseExact : true,
    longDateFormat : {
        LT : 'HH:mm',
        LTS : 'HH:mm:ss',
        L : 'YYYY-MM-DD',
        LL : 'YYYY [m.] MMMM D [d.]',
        LLL : 'YYYY [m.] MMMM D [d.], HH:mm [val.]',
        LLLL : 'YYYY [m.] MMMM D [d.], dddd, HH:mm [val.]',
        l : 'YYYY-MM-DD',
        ll : 'YYYY [m.] MMMM D [d.]',
        lll : 'YYYY [m.] MMMM D [d.], HH:mm [val.]',
        llll : 'YYYY [m.] MMMM D [d.], ddd, HH:mm [val.]'
    },
    calendar : {
        sameDay : '[Å iandien] LT',
        nextDay : '[Rytoj] LT',
        nextWeek : 'dddd LT',
        lastDay : '[Vakar] LT',
        lastWeek : '[PraÄjusÄ¯] dddd LT',
        sameElse : 'L'
    },
    relativeTime : {
        future : 'po %s',
        past : 'prieÅ¡ %s',
        s : translateSeconds,
        m : translateSingular,
        mm : translate,
        h : translateSingular,
        hh : translate,
        d : translateSingular,
        dd : translate,
        M : translateSingular,
        MM : translate,
        y : translateSingular,
        yy : translate
    },
    ordinalParse: /\d{1,2}-oji/,
    ordinal : function (number) {
        return number + '-oji';
    },
    week : {
        dow : 1, // Monday is the first day of the week.
        doy : 4  // The week that contains Jan 4th is the first week of the year.
    }
});

