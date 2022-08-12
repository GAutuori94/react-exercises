import { useContext } from "react";
import { LanguageContext } from "./languageContext";

const Strings = {
    en: {
            CURRENT_LANGUAGE: "The selected language is: "
        },
    it: {
            CURRENT_LANGUAGE: "La lingua selezionata è: "
        }
    }

export function DisplayLanguage() {

    const language = useContext(LanguageContext)

  return <h3>{Strings[language].CURRENT_LANGUAGE} {language}</h3>

}
