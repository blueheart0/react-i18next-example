import i18n from 'i18next';
import LanguageDetector from 'i18next-browser-languagedetector';
import Backend from 'i18next-xhr-backend';
import {initReactI18next} from 'react-i18next';
import ns from './ns';

i18n
    // load translation using xhr -> see /public/locales
    // learn more: https://github.com/i18next/i18next-xhr-backend
    .use(Backend)
    // detect user language
    // learn more: https://github.com/i18next/i18next-browser-languageDetector
    .use(LanguageDetector)
    // pass the i18n instance to react-i18next.
    .use(initReactI18next)
    // init i18next
    // for all options read: https://www.i18next.com/overview/configuration-options
    .init({
        ns:ns,
        fallbackLng: 'en',
        debug: true,
        interpolation: {
            escapeValue: false, // not needed for react as it escapes by default
        },
        backend:{
            loadPath:'/locales/{{lng}}/{{ns}}.json'
        },
        load: [ 'ko', 'en' ],
        whitelist: [ 'ko', 'en' ],
        fallbackNS:'translation',
        fallbackLng : 'en',
        debug:true,
        order: ['querystring', 'localStorage', 'navigator', 'htmlTag'],
        react: {
            bindI18n: 'languageChanged',
            // bindI18nStore: '',
            // transEmptyNodeValue: '',
            transSupportBasicHtmlNodes: true,
            transKeepBasicHtmlNodesFor: ['p','code','br', 'strong', 'i'],
            useSuspense: false,
        },
        appendNamespaceToMissingKey:true
    });

export default i18n;