import { useEffect, useState } from "react";
import "./style.css";

const Clock = () => {
    const [myDate, setMyDate] = useState(new Date());
    const [time, setTime] = useState(myDate.toLocaleString());

    useEffect(() => {
        setTime(myDate.toLocaleString("pl", {
            weekday: "long",
            day: "numeric",
            month: "long",
            hour: "2-digit",
            minute: "2-digit",
            second: "2-digit"
        }));

        const clockInterval = setInterval(() => {
            setMyDate(new Date());
        }, 1000);

        return () => {
            clearInterval(clockInterval);
        }
    }, [myDate])




    return <div className="timer">Dzisiaj jest {time}</div>
};

export default Clock;