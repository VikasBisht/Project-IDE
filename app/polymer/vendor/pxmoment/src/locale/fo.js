//! moment.js locale configuration
//! locale : faroese (fo)
//! author : Ragnar Johannesen : https://github.com/ragnar123

import moment from '../moment';

export default moment.defineLocale('fo', {
    months : 'januar_februar_mars_aprÃ­l_mai_juni_juli_august_september_oktober_november_desember'.split('_'),
    monthsShort : 'jan_feb_mar_apr_mai_jun_jul_aug_sep_okt_nov_des'.split('_'),
    weekdays : 'sunnudagur_mÃ¡nadagur_tÃ½sdagur_mikudagur_hÃ³sdagur_frÃ­ggjadagur_leygardagur'.split('_'),
    weekdaysShort : 'sun_mÃ¡n_tÃ½s_mik_hÃ³s_frÃ­_ley'.split('_'),
    weekdaysMin : 'su_mÃ¡_tÃ½_mi_hÃ³_fr_le'.split('_'),
    longDateFormat : {
        LT : 'HH:mm',
        LTS : 'HH:mm:ss',
        L : 'DD/MM/YYYY',
        LL : 'D MMMM YYYY',
        LLL : 'D MMMM YYYY HH:mm',
        LLLL : 'dddd D. MMMM, YYYY HH:mm'
    },
    calendar : {
        sameDay : '[Ã dag kl.] LT',
        nextDay : '[Ã morgin kl.] LT',
        nextWeek : 'dddd [kl.] LT',
        lastDay : '[Ã gjÃ¡r kl.] LT',
        lastWeek : '[sÃ­Ã°stu] dddd [kl] LT',
        sameElse : 'L'
    },
    relativeTime : {
        future : 'um %s',
        past : '%s sÃ­Ã°ani',
        s : 'fÃ¡ sekund',
        m : 'ein minutt',
        mm : '%d minuttir',
        h : 'ein tÃ­mi',
        hh : '%d tÃ­mar',
        d : 'ein dagur',
        dd : '%d dagar',
        M : 'ein mÃ¡naÃ°i',
        MM : '%d mÃ¡naÃ°ir',
        y : 'eitt Ã¡r',
        yy : '%d Ã¡r'
    },
    ordinalParse: /\d{1,2}\./,
    ordinal : '%d.',
    week : {
        dow : 1, // Monday is the first day of the week.
        doy : 4  // The week that contains Jan 4th is the first week of the year.
    }
});

