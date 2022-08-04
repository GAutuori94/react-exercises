import React from "react";
import { LanguageContext } from "./languageContext";

const Strings = {
en: {
        CURRENT_LANGUAGE: "The selected language is: "
    },
it: {
        CURRENT_LANGUAGE: "La lingua selezionata è: "
    }
}

export class DisplayLanguage extends React.Component {
    render () {
        return <div>
            <LanguageContext.Consumer>
                {(language)  => {
                    return <h1> {Strings[language].CURRENT_LANGUAGE} {language}</h1>
                }}
            </LanguageContext.Consumer>
        </div>
    }
}