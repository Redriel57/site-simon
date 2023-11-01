import { useTranslation } from "react-i18next";
import CustomHelmet from "./CustomHelmet";

const HomePage: React.FC = () => {
    const { t } = useTranslation("home");

    return (
        <div>
            <CustomHelmet t={t} />
            
        </div>
    );
};

export default HomePage;