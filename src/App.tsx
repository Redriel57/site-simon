import { useEffect, useState } from 'react';
import { MemoryRouter as Router, Route, Routes, useNavigate } from 'react-router-dom';
import { Helmet, HelmetProvider } from 'react-helmet-async';

import { I18nextProvider } from 'react-i18next';
import i18n from './utils/i18n';

import HomePage from './pages/HomePage';
import StickyHeader from './pages/StickyHeader';


const FallbackRedirect: React.FC = () => {
    const n = useNavigate();

    useEffect(() => {
        n('/');
    }, [n]);

    return null;
}

const App = () => {
    const [darkMode, setDarkMode] = useState<boolean>(localStorage.getItem('dark') === 'true');
    const [language, setLanguage] = useState<string>(localStorage.getItem('language') || 'fr');

    useEffect(() => {
        localStorage.setItem('dark', darkMode ? 'true' : 'false');
    }, [darkMode]);

    useEffect(() => {
        localStorage.setItem('language', language);
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
                        <StickyHeader darkMode={darkMode} toggleDarkMode={() => setDarkMode(!darkMode)} setLanguage={setLanguage} />
                        <div className="h-full w-full bg-background dark:bg-background-dark">
                            <Routes>
                                <Route path="/" element={<HomePage />} />
                                <Route path="*" element={<FallbackRedirect />} />
                            </Routes>
                        </div>
                    </Router>
                </I18nextProvider>
            </div>
        </HelmetProvider>
    );
}

export default App;
