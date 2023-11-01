import CustomHelmet from "./CustomHelmet";
import { useTranslation } from "react-i18next";

const MusicPage: React.FC = () => {
    const { t } = useTranslation("music");

    return (
        <div>
            <CustomHelmet t={t} />
        </div>
    );
};

export default MusicPage;