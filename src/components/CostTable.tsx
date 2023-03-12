import Table, { ColumnsType } from "antd/es/table";
import React from "react";
import type { Costs } from "../types/costs";
import { cost } from "../constant/costs";
import { useParams } from "react-router-dom";
export const CostTable: React.FC = () => {
    const { id } = useParams()
    console.log(id);

    const columns: ColumnsType<Costs> = [
        {
            title: "#",
            dataIndex: 'id',
            key: 'id',
        },
        {
            title: 'Название',
            dataIndex: 'title',
            key: 'title'
        },
        {
            title: 'Сумма',
            dataIndex: 'cost',
            key: 'cost',
            responsive: ['md'],
        },
    ];

    return <Table columns={columns} dataSource={cost} />;
};
