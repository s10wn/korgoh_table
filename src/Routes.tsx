import { App } from "./App";
import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { CostTable } from "./components/CostTable";

export const Routers: React.FC = () => {
    return <BrowserRouter>
        <Routes>
            <Route path="/" element={<App id={0} name={""} address={""} name_order={""} created_date={""} end_date={""} actual_date={""} price={0} prepayment={0} status={""} comment={""} difficulty={""} responsible={""} offer={""} />} />
            <Route path="/costs/:id" element={<CostTable />} />
        </Routes>
    </BrowserRouter>
};
