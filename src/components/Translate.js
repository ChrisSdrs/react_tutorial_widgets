import React, { useState } from "react";
import Dropdown from "./Dropdown";
import Convert from "./Convert";

const options = [
  {
    label: "Afrikaans",
    value: "af",
  },
  {
    label: "Arabic",
    value: "ar",
  },
  {
    label: "Dutch",
    value: "nl",
  },
  {
    label: "English",
    value: "en",
  },
  {
    label: "French",
    value: "fr",
  },
  {
    label: "German",
    value: "de",
  },
  {
    label: "Greek",
    value: "el",
  },
  {
    label: "Hindi",
    value: "hi",
  },
  {
    label: "Italian",
    value: "it",
  },
  {
    label: "Polish",
    value: "pl",
  },
  {
    label: "Russian",
    value: "ru",
  },
  {
    label: "Serbian",
    value: "sr",
  },
  {
    label: "Spanish",
    value: "es",
  },
  {
    label: "Turkish",
    value: "tr",
  },
];

const Translate = () => {
  const [language, setLanguage] = useState(options[0]);
  const [text, setText] = useState("");

  return (
    <div>
      <div className="ui form">
        <div className="field">
          <label htmlFor="">Enter Text</label>
          <input value={text} onChange={(e) => setText(e.target.value)} />
        </div>
      </div>
      <Dropdown
        label="Select a language"
        selected={language}
        onSelectedChange={setLanguage}
        options={options}
      />
      <hr />
      <h3 className="ui header">Output</h3>
      <Convert text={text} language={language} />
    </div>
  );
};

export default Translate;
