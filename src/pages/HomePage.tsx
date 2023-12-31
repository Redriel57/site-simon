import React from "react";
import { useTranslation } from "react-i18next";
import CustomHelmet from "./CustomHelmet";

const HomePage: React.FC = () => {
    const { t } = useTranslation("home");

    return (
        <div>
            <CustomHelmet t={t} />
            <h1>{t("title")}</h1>
            <p>{t("content")}</p>
        </div>
    );
};

export default HomePage;
