import { Button } from "antd";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { RightOutlined} from '@ant-design/icons'

import './MobileTable.css'
import { DataType } from "./types/DataType";
import "./mobileTable.scss";
export const MobileTable = () => {
  const [data, setData] = useState<DataType[]>([])
  useEffect(() => {
    axios.get('http://86.110.212.178:8081/api/order').then((res) => {
    setData(res.data)
    })
  }, [])
  return <div className="order_main">
    <div className="order_title">
    <h1>Здравствуйте!</h1>
    <p>Table by s10wn beta</p>

    </div>
    {data.map((val) => (   <div key={val.id} className="order_card">
      <div>
      <h1>{val.name}</h1>
      <h3>{val.name_order}</h3>
      <p>{val.address}</p>
      </div>
      <Button><Link to={`/order/${val.id}`}><RightOutlined/></Link></Button>
    </div>))}
  </div>;
};
