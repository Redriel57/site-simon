import React, { useEffect, useState } from "react";
import { BrowserRouter as Router, Route, Routes, useNavigate } from "react-router-dom";
import { Helmet, HelmetProvider } from "react-helmet-async";

import { I18nextProvider } from "react-i18next";
import i18n from "./utils/i18n";

import StickyHeader from "./pages/StickyHeader";
import HomePage from "./pages/HomePage";
import ProjectsPage from "./pages/ProjectsPage";
import MusicPage from "./pages/MusicPage";
import ContactPage from "./pages/ContactPage";

const FallbackRedirect: React.FC = () => {
    const n = useNavigate();

    useEffect(() => {
        n("/");
    }, [n]);

    return null;
};

const App = () => {
    const [darkMode, setDarkMode] = useState<boolean>(localStorage.getItem("dark") === "true");
    const [language, setLanguage] = useState<string>(localStorage.getItem("language") ?? "fr");

    useEffect(() => {
        localStorage.setItem("dark", darkMode ? "true" : "false");
    }, [darkMode]);

    useEffect(() => {
        localStorage.setItem("language", language);
        i18n.changeLanguage(language);
    }, [language]);

    return (
        <HelmetProvider>
            <div className={`${darkMode ? "dark" : ""}`}>
                <Helmet>
                    <html lang={i18n.language} />
                </Helmet>
                <I18nextProvider i18n={i18n}>
                    <Router>
                        <StickyHeader
                            darkMode={darkMode}
                            toggleDarkMode={() => setDarkMode(!darkMode)}
                            setLanguage={setLanguage}
                        />
                        <div className="h-full w-full bg-white dark:bg-background">
                            <Routes>
                                <Route path="/" element={<HomePage />} />
                                <Route path="/projects" element={<ProjectsPage />} />
                                <Route path="/music" element={<MusicPage />} />
                                <Route path="/contact" element={<ContactPage />} />
                                <Route path="*" element={<FallbackRedirect />} />
                            </Routes>
                        </div>
                    </Router>
                </I18nextProvider>
            </div>
        </HelmetProvider>
    );
};

export default App;
