import { useEffect, useState } from "react";
import "./style.css";

const parsedDate = (date) => date.toLocaleString(undefined, {
    weekday: "long",
    day: "numeric",
    month: "long",
    hour: "2-digit",
    minute: "2-digit",
    second: "2-digit"        
});

const Clock = () => {
    const [myDate, setMyDate] = useState(new Date());
   
    useEffect(() => {
        const clockIntervalId = setInterval(() => {
            setMyDate(new Date());
        }, 1000);

        return () => {
            clearInterval(clockIntervalId);
        }
    }, [])

    

    return (
        <div className="timer">
            Dzisiaj jest {" "} {parsedDate(myDate)}
        </div>
    )
};

export default Clock;