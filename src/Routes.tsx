import { App } from "./App";
import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { CostTable } from "./components/CostTable";

export const Routers: React.FC = () => {
    return <BrowserRouter>
        <Routes>
            <Route path="/" element={<App />} />
            <Route path="/costs/:id" element={<CostTable />} />
        </Routes>
    </BrowserRouter>
};
