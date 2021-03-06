//! moment.js locale configuration
//! locale : icelandic (is)
//! author : Hinrik Ãrn SigurÃ°sson : https://github.com/hinrik

import moment from '../moment';

function plural(n) {
    if (n % 100 === 11) {
        return true;
    } else if (n % 10 === 1) {
        return false;
    }
    return true;
}
function translate(number, withoutSuffix, key, isFuture) {
    var result = number + ' ';
    switch (key) {
    case 's':
        return withoutSuffix || isFuture ? 'nokkrar sekÃºndur' : 'nokkrum sekÃºndum';
    case 'm':
        return withoutSuffix ? 'mÃ­nÃºta' : 'mÃ­nÃºtu';
    case 'mm':
        if (plural(number)) {
            return result + (withoutSuffix || isFuture ? 'mÃ­nÃºtur' : 'mÃ­nÃºtum');
        } else if (withoutSuffix) {
            return result + 'mÃ­nÃºta';
        }
        return result + 'mÃ­nÃºtu';
    case 'hh':
        if (plural(number)) {
            return result + (withoutSuffix || isFuture ? 'klukkustundir' : 'klukkustundum');
        }
        return result + 'klukkustund';
    case 'd':
        if (withoutSuffix) {
            return 'dagur';
        }
        return isFuture ? 'dag' : 'degi';
    case 'dd':
        if (plural(number)) {
            if (withoutSuffix) {
                return result + 'dagar';
            }
            return result + (isFuture ? 'daga' : 'dÃ¶gum');
        } else if (withoutSuffix) {
            return result + 'dagur';
        }
        return result + (isFuture ? 'dag' : 'degi');
    case 'M':
        if (withoutSuffix) {
            return 'mÃ¡nuÃ°ur';
        }
        return isFuture ? 'mÃ¡nuÃ°' : 'mÃ¡nuÃ°i';
    case 'MM':
        if (plural(number)) {
            if (withoutSuffix) {
                return result + 'mÃ¡nuÃ°ir';
            }
            return result + (isFuture ? 'mÃ¡nuÃ°i' : 'mÃ¡nuÃ°um');
        } else if (withoutSuffix) {
            return result + 'mÃ¡nuÃ°ur';
        }
        return result + (isFuture ? 'mÃ¡nuÃ°' : 'mÃ¡nuÃ°i');
    case 'y':
        return withoutSuffix || isFuture ? 'Ã¡r' : 'Ã¡ri';
    case 'yy':
        if (plural(number)) {
            return result + (withoutSuffix || isFuture ? 'Ã¡r' : 'Ã¡rum');
        }
        return result + (withoutSuffix || isFuture ? 'Ã¡r' : 'Ã¡ri');
    }
}

export default moment.defineLocale('is', {
    months : 'janÃºar_febrÃºar_mars_aprÃ­l_maÃ­_jÃºnÃ­_jÃºlÃ­_Ã¡gÃºst_september_oktÃ³ber_nÃ³vember_desember'.split('_'),
    monthsShort : 'jan_feb_mar_apr_maÃ­_jÃºn_jÃºl_Ã¡gÃº_sep_okt_nÃ³v_des'.split('_'),
    weekdays : 'sunnudagur_mÃ¡nudagur_Ã¾riÃ°judagur_miÃ°vikudagur_fimmtudagur_fÃ¶studagur_laugardagur'.split('_'),
    weekdaysShort : 'sun_mÃ¡n_Ã¾ri_miÃ°_fim_fÃ¶s_lau'.split('_'),
    weekdaysMin : 'Su_MÃ¡_Ãr_Mi_Fi_FÃ¶_La'.split('_'),
    longDateFormat : {
        LT : 'H:mm',
        LTS : 'H:mm:ss',
        L : 'DD.MM.YYYY',
        LL : 'D. MMMM YYYY',
        LLL : 'D. MMMM YYYY [kl.] H:mm',
        LLLL : 'dddd, D. MMMM YYYY [kl.] H:mm'
    },
    calendar : {
        sameDay : '[Ã­ dag kl.] LT',
        nextDay : '[Ã¡ morgun kl.] LT',
        nextWeek : 'dddd [kl.] LT',
        lastDay : '[Ã­ gÃ¦r kl.] LT',
        lastWeek : '[sÃ­Ã°asta] dddd [kl.] LT',
        sameElse : 'L'
    },
    relativeTime : {
        future : 'eftir %s',
        past : 'fyrir %s sÃ­Ã°an',
        s : translate,
        m : translate,
        mm : translate,
        h : 'klukkustund',
        hh : translate,
        d : translate,
        dd : translate,
        M : translate,
        MM : translate,
        y : translate,
        yy : translate
    },
    ordinalParse: /\d{1,2}\./,
    ordinal : '%d.',
    week : {
        dow : 1, // Monday is the first day of the week.
        doy : 4  // The week that contains Jan 4th is the first week of the year.
    }
});

