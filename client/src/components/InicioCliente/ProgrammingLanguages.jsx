import React, { useState } from 'react';
import styles from '../../css/ProgrammingLanguages.module.css';

const languages = ["ALL", "Django", "C", "Python", "HTML", "C++", "SQL"];

const ProgrammingLanguages = ({ setSelectedLanguage }) => {
  const [activeLanguage, setActiveLanguage] = useState("ALL");

  const handleLanguageSelect = (language) => {
    setActiveLanguage(language);
    setSelectedLanguage(language);
  };

  return (
    <div className={styles.languagesContainer}>
      {languages.map((lang) => (
        <button
          key={lang}
          className={`${styles.languageButton} ${activeLanguage === lang ? styles.active : ""}`}
          onClick={() => handleLanguageSelect(lang)}
        >
          {lang}
        </button>
      ))}
    </div>
  );
};

export default ProgrammingLanguages;