import { App } from "./App";
import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { CostTable } from "./components/CostTable";
import { OrderCard } from "./OrderCard";
import { Login } from "./Login";

export const Routers: React.FC = () => {
    return <BrowserRouter>
        <Routes>
            <Route path="/" element={<App />} />
            <Route path="/login" element={<Login />} />

            <Route path="/order/:id" element={<OrderCard />}/>
            <Route path="/costs/:id" element={<CostTable />} />
        </Routes>
    </BrowserRouter>
};
