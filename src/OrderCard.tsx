import axios from "axios";
import React, { useEffect, useState } from "react";
import { Button, Modal, Space, Form, Input, } from "antd";
import { Link, useParams } from "react-router-dom";
import {DeleteOutlined, FileTextOutlined} from '@ant-design/icons'




type Order ={
    id?: number,
    name?: string,
    address?: string,
    name_order?: string,
    created_date?: string,
    end_date?: string,
    actual_date?: string,
    price?: number,
    prepayment?: number,
    status?: string,
    comment?: string,
    difficulty?: string,
    rest?: string;
    responsible?: string,
    offer?: string,
}
export const OrderCard= () => {
    const {id} = useParams()
    const [data, setData] = useState<Order>({});

    useEffect(() => {
        axios.get(`http://86.110.212.178:8081/api/order/${id}`).then((res) => {
            setData(res.data)
        })
    }, [])
  return (<div className="order_info-main">
    <h1>{data.name}</h1>
    <hr />
        <p className="order_info">Имя заказчика: <h3>{data.name_order}</h3></p>
        <p className="order_info">Адрес заказчика: <h3>{data.address}</h3></p>
        <p className="order_info">Дата получение заказа: <h3>{data.created_date}</h3></p>
        <p className="order_info">Дата окончание заказа: <h3>{data.end_date}</h3></p>
        <p className="order_info">Реальная дата окончание: <h3>{data.actual_date}</h3></p>
        <p className="order_info">Цена: <h3>{data.price}</h3></p>
        <p className="order_info">Предоплата: <h3>{data.prepayment}</h3></p>
        <p className="order_info">Остаток: <h3>{data.rest}</h3></p>
        <p className="order_info">Статус заказа: <h3>{data.status}</h3> </p>
        <p className="order_info">Комментарии: <h3>{data.comment}</h3></p>
        <p className="order_info">Сложности: <h3>{data.difficulty}</h3></p>
        <p className="order_info">Ответственный: <h3>{data.responsible}</h3></p>
        <p className="order_info">Договор заказа: <h3>{data.offer}</h3></p>

        <div className="order_btn">
        <Space><Button  type="primary"  size="large"><Link to={`/costs/${id}`}><FileTextOutlined /></Link></Button>
        <Button type="primary"   size="large"><DeleteOutlined /></Button></Space>
       
    </div>
  </div>

  );
};
