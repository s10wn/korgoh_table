import { Button } from "antd";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import './MobileTable.css'
import { DataType } from "./types/DataType";
export const MobileTable = () => {
  const [data, setData] = useState<DataType[]>([])
  useEffect(() => {
    axios.get('http://86.110.212.178:8081/api/order').then((res) => {
    setData(res.data)
    })
  }, [])
  return <div className="order_main">
    {data.map((val) => (   <div key={val.id} className="order_card">
      <div>
      <h1>{val.name}</h1>
      <h3>{val.name_order}</h3>
      <p>{val.address}</p>
      </div>
      <Button><Link to={`/order/${val.id}`}>Link</Link></Button>
    </div>))}
  </div>;
};
