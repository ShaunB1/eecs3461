import {Button} from "@mui/material";
import {useNavigate} from "react-router-dom";

const Sidepanel = () => {
    const navigate = useNavigate();
    
    return (
        <>
            <div
                style={{
                    width: "20%",
                    height: "100vh",
                    background: "#BFF4BE",
                    justifyContent: "center"
                }}
            >
                <Button onClick={() => navigate("/")}>Home</Button>
                <Button onClick={() => navigate("/calendar")}>Calendar</Button>
            </div>
        </>
    );
}

export default Sidepanel;