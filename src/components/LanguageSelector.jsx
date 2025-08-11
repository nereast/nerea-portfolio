import { useEffect, useState } from "react";
import i18next from "i18next";
import { useTranslation } from "react-i18next";
import { useLocation, useNavigate } from "react-router-dom"; // 🆕

const languageOptions = [
  { language: "EU", code: "eu" },
  { language: "ES", code: "es" },
  { language: "EN", code: "en" },
];

const LanguageSelector = () => {
  const [language, setLanguage] = useState(i18next.language);
  const { i18n } = useTranslation();
  const location = useLocation();
  const navigate = useNavigate();

  const projectPaths = {
    eu: "proiektuak",
    es: "proyectos",
    en: "projects"
  };

  const handleLanguageChange = (e) => {
    const selectedLanguage = e.target.value;
    setLanguage(selectedLanguage);
    i18next.changeLanguage(selectedLanguage);

    let parts = location.pathname.split("/").filter(Boolean);

    // Lehen zatia hizkuntza bada ordezkatu, bestela gehitu
    if (languageOptions.some(l => l.code === parts[0])) {
      parts[0] = selectedLanguage;
    } else {
      parts.unshift(selectedLanguage);
    }

    // Proiektuaren slug-a hizkuntzaren arabera ordezkatu
    if (parts[1] && Object.values(projectPaths).includes(parts[1])) {
      parts[1] = projectPaths[selectedLanguage];
    }

    navigate("/" + parts.join("/"));
  };

  useEffect(() => {
    document.body.dir = i18n.dir();
  }, [i18n.language]);
  return (
    <select
      id="language"
      value={language}
      onChange={handleLanguageChange}
      className="border-none bg-transparent text-[20px] md:text-[15px]"
    >
      {languageOptions.map(({ language, code }, key) => (
        <option value={code} key={key}>
          {language}
        </option>
      ))}
    </select>
  );
};

export default LanguageSelector;




