import React from "react";
import { IntlProvider } from "react-intl";
import Spanish from './es'
import English from './en'

const locale = navigator.language;

let lang;

switch (locale) {
    case "en":
        lang = English;
        break;
    case "es":
        lang = Spanish;
        break;
    default:
        break;
}

const Intl = () => {
    return (
        <IntlProvider locale={locale}>
            { children }
        </IntlProvider>
    )
}

export { Intl }