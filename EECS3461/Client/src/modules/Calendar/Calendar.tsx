import { useEffect, useState } from "react";

const Calendar = () => {
    const [date, setDate] = useState();
    
    useEffect(() => {
        const fetchDate = async () => {
            const response = await fetch("/api/calendar");
            const data = await response.json();
            console.log(data);
            setDate(data.date);
        };
        
        fetchDate();
    }, []);
    
    return (
        <>
            <div
                style={{
                    width: "200px",
                    height: "200px",
                }}
            >
                <span>Today's Date:</span>
                {date}
            </div>
        </>
    );
}

export default Calendar;