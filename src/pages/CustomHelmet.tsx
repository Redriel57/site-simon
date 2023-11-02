import React from "react";
import { TFunction } from "i18next";
import { Helmet } from "react-helmet-async";

interface ICustomHelmetProps {
    t: TFunction<string, undefined>;
}

const CustomHelmet: React.FC<ICustomHelmetProps> = ({ t }) => (
    <Helmet>
        <title>Simon Renard | {t("helmetTitle")}</title>
        <meta name="description" content={t("helmetDescription")} />
    </Helmet>
);

export default CustomHelmet;
