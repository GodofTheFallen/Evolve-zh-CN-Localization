import { global } from './vars.js';


let strings;
getString(global.settings.locale);


export function loc(key, variables) {
    let string = strings[key];
    if (!string) {
        console.error(`string ${key} don't found`);
        console.log(strings);
    }
    if (variables && variables instanceof Array) {
        for (let i = 0; i < variables.length; i++) {
            string = string.replace(`%${i}`, variables[i]);
        }
    }
    return string;
}

function getString(locale) {
    $.ajaxSetup({ async: false });

    let defaultString;
    let localeString;
    $.getJSON("strings/strings.json", (data) => { defaultString = data; });
    const defSize = defaultString.length;
    try {
        $.getJSON(`strings/strings.${locale}.json`, (data) => { localeString = data; })
    }
    catch (e) {
        if (locale != 'en-US') {
            console.error(e,e.stack);
        }
    }

    $.ajaxSetup({ async: true });

    if (localeString) {
        Object.assign(defaultString, localeString);
    }

    if(defaultString.length != defSize){
        console.error(`string.${locale}.json have extra keys.`);
    }

    strings = defaultString;
}

export const locales = {
    'en-US': 'English (US)',
    //'es-us': 'Spanish (US/Latin-America)',
    'pt-BR': 'Português Brasileiro',
};
