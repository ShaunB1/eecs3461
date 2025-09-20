import './App.css'
import {BrowserRouter, Route, Routes} from "react-router-dom";
import Calendar from "./modules/Calendar/Calendar.tsx";
import Home from "./modules/Home/Home.tsx";
import Sidepanel from "./modules/Core/Components/Sidepanel/Sidepanel.tsx";

function App() {
    return (
        <BrowserRouter>
            <div
                style={{
                    display: "flex",
                }}
            >
                <Sidepanel />
                <div
                    style={{
                        outline: "2px solid red",
                        width: "100vw",
                    }}
                >
                    <Routes>
                        <Route path="/" element={<Home />} />
                        <Route path="/calendar" element={<Calendar />} />
                    </Routes>
                </div>
            </div>
        </BrowserRouter>
    );
}

export default App
