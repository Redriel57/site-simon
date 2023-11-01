import { useTranslation } from "react-i18next";
import CustomHelmet from "./CustomHelmet";

const ProjectsPage: React.FC = () => {
    const { t } = useTranslation("projects");

    return (
        <div>
            <CustomHelmet t={t} />
        </div>
    );
};

export default ProjectsPage;