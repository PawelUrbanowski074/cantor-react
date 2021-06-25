import { Timer } from "./styled";
import { useCurrentDate } from "./useCurrentDate";

const parsedDate = (date) => date.toLocaleString(undefined, {
    weekday: "long",
    day: "numeric",
    month: "long",
    hour: "2-digit",
    minute: "2-digit",
    second: "2-digit"
});

const Clock = () => {
    const date = useCurrentDate();
    
    return (
        <Timer>
            Dzisiaj jest {" "} {parsedDate(date)}
        </Timer>
    )
};

export default Clock;