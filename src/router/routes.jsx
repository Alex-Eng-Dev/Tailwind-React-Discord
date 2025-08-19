import { Home } from "../pages/Home";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Proyecto1 } from "../pages/Proyecto1";

export function MyRoutes() {
    return (
        <>
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/proyecto1" element={<Proyecto1 />} />
                </Routes>
            </BrowserRouter>
        </>
    );
}