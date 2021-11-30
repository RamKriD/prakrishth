import React, { createContext, useState } from "react";
import LocalizedStrings from "react-localization";

import en from "./../locales/en.json";
import hi from "./../locales/hi.json";

const strings = new LocalizedStrings({
  en: en,
  hi: hi,
});

const LocalizationContext = createContext({
  strings: strings,
  setLanguage: (lang) => {}
});

export function LocalizationProvider(props) {
  let browserLang = window.navigator.language
    ? window.navigator.language
    : "hi";
  const [actLang, setActLang] = useState(browserLang);

  const setLanguage = (lang) => {
    if (lang && strings.getAvailableLanguages().indexOf(lang) >= 0) {
      setActLang(lang);
      strings.setLanguage(lang);
    } else {
      return strings.langNotSupported;
    }
  };

  const context = {
    strings: strings,
    setLanguage: setLanguage,
  };

  return (
    <LocalizationContext.Provider value={context}>
      {props.children}
    </LocalizationContext.Provider>
  );
}

export default LocalizationContext;
