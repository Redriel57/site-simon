import { useTranslation } from 'react-i18next';
import { FaSun, FaMoon, FaBriefcase, FaEnvelope, FaMusic } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';

import LanguageSelector from './components/Header/LanguageSelector';


interface IStickyHeaderProps {
    darkMode: boolean;
    toggleDarkMode: () => void;
    setLanguage: (language: string) => void;
};

const StickyHeader: React.FC<IStickyHeaderProps> = ({ darkMode, toggleDarkMode, setLanguage }) => {
    const { t } = useTranslation("header");
    const navigate = useNavigate();

    return (
        <div className="bg-background dark:bg-background-dark p-4 fixed top-0 w-full z-50 shadow-md">
            <div className="container mx-auto flex items-center justify-between">
                <span onClick={() => navigate("/")} className="text-2xl font-extrabold text-primary-dark hover:text-highlight transition-transform transform hover:scale-105 shadow-md">
                    Simon Renard
                </span>

                <div className="flex items-center space-x-4">
                    <button className="flex items-center px-4 py-2 rounded-full bg-primary hover:bg-highlight transition-transform transform hover:scale-105 shadow-md dark:bg-primary-dark dark:hover:bg-highlight">
                        <FaBriefcase className="mr-2" />
                        {t("projects")}
                    </button>

                    <button className="flex items-center px-4 py-2 rounded-full bg-secondary hover:bg-highlight transition-transform transform hover:scale-105 shadow-md dark:bg-secondary-dark dark:hover:bg-highlight">
                        <FaMusic className="mr-2" />
                        {t("music")}
                    </button>

                    <button className="flex items-center px-4 py-2 rounded-full bg-secondary hover:bg-highlight transition-transform transform hover:scale-105 shadow-md dark:bg-secondary-dark dark:hover:bg-highlight">
                        <FaEnvelope className="mr-2" />
                        {t("contacts")}
                    </button>

                    <button onClick={toggleDarkMode} className="p-2 rounded-md bg-background dark:bg-background-dark hover:bg-highlight hover:dark:bg-highlight-dark transition">
                        {darkMode ?
                            <FaSun className="text-primary-dark h-6 w-6" />
                            :
                            <FaMoon className="text-primary h-6 w-6" />
                        }
                    </button>
                    <LanguageSelector setLanguage={setLanguage} />
                </div>
            </div>
        </div>
    );
};

export type { IStickyHeaderProps };
export default StickyHeader;
