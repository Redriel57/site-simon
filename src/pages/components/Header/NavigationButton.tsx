import React, { useTransition } from "react";
import { IconType } from "react-icons/lib";
import { useLocation, useNavigate } from "react-router-dom";

interface INavigationButtonProps {
    Icon: IconType;
    location: string;
    text: string;
}

const NavigationButton: React.FC<INavigationButtonProps> = ({ Icon, location, text }) => {
    const currentLocation = useLocation();
    const navigate = useNavigate();

    const startTransition = useTransition()[1];

    return (
        <button
            onClick={() => {
                startTransition(() => navigate(`/${location}`));
            }}
            className={`flex justify-center items-center px-4 py-2 w-32 rounded-full ${
                currentLocation.pathname === "/" + location
                    ? "bg-primary dark:bg-primary-dark"
                    : "bg-secondary dark:bg-secondary-dark"
            } hover:bg-highlight dark:hover:bg-highlight transition-transform transform hover:scale-105 shadow-md`}
        >
            <Icon className="mr-2" />
            {text}
        </button>
    );
};

export type { INavigationButtonProps };
export default NavigationButton;
