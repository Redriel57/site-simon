import React, { useTransition } from "react";
import { useTranslation } from "react-i18next";
import { FaSun, FaMoon, FaBriefcase, FaEnvelope, FaMusic } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

import LanguageSelector from "./components/Header/LanguageSelector";
import NavigationButton, { INavigationButtonProps } from "./components/Header/NavigationButton";

interface IStickyHeaderProps {
    darkMode: boolean;
    toggleDarkMode: () => void;
    setLanguage: (language: string) => void;
}

const StickyHeader: React.FC<IStickyHeaderProps> = ({ darkMode, toggleDarkMode, setLanguage }) => {
    const { t } = useTranslation("header");
    const navigate = useNavigate();
    const startTransition = useTransition()[1];

    const BUTTONS: INavigationButtonProps[] = [
        {
            Icon: FaBriefcase,
            location: "projects",
            text: t("projects")
        },
        {
            Icon: FaMusic,
            location: "music",
            text: t("music")
        },
        {
            Icon: FaEnvelope,
            location: "contact",
            text: t("contacts")
        }
    ];

    return (
        <div className="bg-background dark:bg-background-dark p-4 fixed top-0 w-full z-50 shadow-md">
            <div className="container mx-auto flex items-center justify-between">
                <button
                    onClick={() => startTransition(() => navigate("/"))}
                    className="text-2xl font-extrabold text-primary transition-transform transform hover:scale-105 shadow-md bg-transparent border-none outline-none focus:outline-none"
                >
                    Simon Renard
                </button>

                <div className="flex items-center space-x-4">
                    {BUTTONS.map(v => (
                        <NavigationButton key={v.text} {...v} />
                    ))}
                </div>

                <div className="flex items-center space-x-4">
                    <button
                        onClick={toggleDarkMode}
                        className="p-2 rounded-md bg-background dark:bg-background-dark hover:bg-highlight hover:dark:bg-highlight-dark transition"
                    >
                        {darkMode ? (
                            <FaSun className="text-primary-dark h-6 w-6" />
                        ) : (
                            <FaMoon className="text-primary h-6 w-6" />
                        )}
                    </button>
                    <LanguageSelector setLanguage={setLanguage} />
                </div>
            </div>
        </div>
    );
};

export type { IStickyHeaderProps };
export default StickyHeader;
