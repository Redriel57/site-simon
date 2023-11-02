import React from "react";
import { useTranslation } from "react-i18next";
import CustomHelmet from "./CustomHelmet";

const ContactPage: React.FC = () => {
    const { t } = useTranslation("contact");

    return (
        <div>
            <CustomHelmet t={t} />
        </div>
    );
};

export default ContactPage;
