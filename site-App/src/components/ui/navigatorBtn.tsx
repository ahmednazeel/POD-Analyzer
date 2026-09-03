
import { MoveLeft } from "lucide-react";
import { useNavigate } from "react-router";
import type { NavigatorBtnProps } from "../types/ui";

const NavigatorBtn = ({ hoverColor = "#6366f1", to }: NavigatorBtnProps) => {
    const navigate = useNavigate();
    const condition = to ? to: -1;
    
    const goTo = () => navigate(condition);

    return (
        <button
            style={{"--hover-color": hoverColor,} as React.CSSProperties}
            className="
                group absolute top-1 left-2 rounded-full
                border border-[#eee] p-1 cursor-pointer
                hover:border-[var(--hover-color)]
            "
            onClick={goTo}
        >
            <MoveLeft className="text-gray-700 group-hover:text-[var(--hover-color)]" />
        </button>
    );
};

export default NavigatorBtn;