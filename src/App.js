import { useState } from "react";
import { DisplayLanguage } from "./displayLanguage";
import { LanguageContext } from "./languageContext";

export function App() {

  const [language, setLanguage] = useState('en')

  function handleChangeLanguage (event) {
    setLanguage(event.target.value) 
  }

  return (
    <div>
      <select value={language} onChange={handleChangeLanguage}>
        <option value='en'>English</option>
        <option value='it'>Italiano</option>
      </select>
      <LanguageContext.Provider value={language}>
      <DisplayLanguage />
      </LanguageContext.Provider>
    </div>
  )
}
