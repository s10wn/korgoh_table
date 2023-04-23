import React, {useEffect, useState} from "react";
import Table, { ColumnsType } from "antd/es/table";
import {DeleteOutlined} from '@ant-design/icons'

import { useParams } from "react-router-dom";
import { Button } from "antd";
import { ModalMaterial } from "./ModalMaterial/Modals";
import EditOrder from "../types/costs";
import axios from "axios";
export const CostTable: React.FC = () => {
    const [modal2Open, setModal2Open] = useState(false);
    const [data, setData] =useState<EditOrder[]>([])
    const {id} = useParams()
    const getData = () => {
        axios.get(`http://86.110.212.178:8081/api/material?id=${id}`).then((res) => {
            setData(res.data)
        })
    }
    const handleDelete = (id: number) =>{ 
        axios.delete(`http://86.110.212.178:8081/api/material?id=${id}`).then((res) => {
            setData(res.data)
        })
    }
    useEffect(() => {
       getData()
    }, [])

    const columns: ColumnsType<EditOrder> = [
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
            dataIndex: 'price',
            key: 'price',
        },
        {
            title: "Action",
            dataIndex: "action",
            render: (_: any, record: EditOrder) => (<Button onClick={() => handleDelete(record.id)}><DeleteOutlined /></Button>)
          }
    ];

    return (
        <>
        <div className="header_btn">
            <Button onClick={() => setModal2Open(true)} type="primary">Добавить заказ</Button>
        </div>
        {modal2Open && <ModalMaterial active={true} setmodal={setModal2Open} ids={id} setdata={setData} />}
            <Table scroll={{ x: 'max-content' }} columns={columns} dataSource={data} />

        </>
    )
};
