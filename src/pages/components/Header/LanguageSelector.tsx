import React, { useState } from "react";
import { FaGlobe } from "react-icons/fa";

interface ILanguageSelectorProps {
    setLanguage: (language: string) => void;
}

const LanguageSelector: React.FC<ILanguageSelectorProps> = ({ setLanguage }) => {
    const [isOpen, setIsOpen] = useState(false);

    const changeLanguage = (lang: string) => {
        setLanguage(lang);
        setIsOpen(false);
    };

    const LANGUAGES = [
        ["fr", "Français"],
        ["en", "English"],
        ["de", "Deutsch"]
    ];

    return (
        <div className="relative inline-block text-left">
            <button
                onClick={() => setIsOpen(!isOpen)}
                className="p-2 rounded-md bg-background dark:bg-background-dark hover:bg-highlight hover:dark:bg-highlight-dark transition"
            >
                <FaGlobe className="text-primary dark:text-primary-dark h-6 w-6" />
            </button>

            {isOpen && (
                <div className="origin-top-right absolute right-0 mt-2 w-fit rounded-md shadow-lg bg-white dark:bg-background dark:text-white">
                    <div className="py-1" role="menu" aria-orientation="vertical">
                        {LANGUAGES.map(([l, lang]) => (
                            <button
                                key={lang}
                                onClick={() => changeLanguage(l)}
                                className="block px-4 py-2 text-sm leading-5 text-left hover:bg-gray-100 dark:hover:bg-background-dark focus:bg-gray-100 focus:outline-none w-full"
                            >
                                {lang}
                            </button>
                        ))}
                    </div>
                </div>
            )}
        </div>
    );
};

export type { ILanguageSelectorProps };
export default LanguageSelector;
