import React, { useEffect, useState } from 'react';
import { Table } from 'antd';
import type { ColumnsType } from 'antd/es/table';
import type { DataType } from './types/DataType';

import { Link } from 'react-router-dom';
import { Header } from './components/Header/Header';
import ky from 'ky';
import { Modals } from './components/Modal/Modals';




export const App: React.FC<DataType> = () => {
  const [data, setData] = useState<DataType[]>([])
  const [edit, setEdit] = useState({})
  const [x, setX] = useState(false)
  const columns: ColumnsType<DataType> = [
    {
      title: "#",
      dataIndex: 'id',
      render: (value) => <p>{value}</p>,
      key: 'id',
    },
    {
      title: 'Название заказ',
      dataIndex: 'name',

      key: 'name',
      render: (text) => <b>{text}</b>,
    },
    {
      title: 'name_order ',
      dataIndex: 'name_order',
      key: 'name_order',
      render: (value) => <p>{value}</p>,

    },
    {
      title: 'Адрес проекта ',
      dataIndex: 'address',
      key: 'address',
      render: (value) => <p>{value}</p>,

    },
    {
      title: 'Начало работы',
      dataIndex: 'created_date',
      key: 'created_date',
      render: (value) => <p>{value}</p>,

    },
    {
      title: 'Конец работы',
      dataIndex: 'end_date',
      key: 'end_plans',
      render: (value) => <p>{value}</p>,
    }, {
      title: 'Реальная дата',
      dataIndex: 'actual_date',
      key: 'real_ending',
      render: (value) => <p>{value}</p>,
    }, {
      title: 'Сумма',
      dataIndex: 'price',
      key: 'price',
      render: (value) => <h1 className='price_table'>{value}</h1>,

    }, {
      title: 'Предоплата',
      dataIndex: 'prepayment',
      key: 'prepayment',
      render: (value) => <h1 className='price_table'>{value}</h1>,

    }, {
      title: 'Остаток',
      dataIndex: 'rest',
      key: 'rest',
      render: (value) => <h1 className='price_table'>{value}</h1>,

    },
    {
      title: 'Статус',
      dataIndex: 'status',
      key: 'status',
      render: (value) => <p>{value}</p>,

    }, {
      title: 'Комментарии',
      dataIndex: 'comment',
      key: 'comment',
      render: (value) => <p>{value}</p>,

    }, {
      title: 'Проблемы',
      dataIndex: 'difficulty',
      key: 'difficulty',
      render: (value) => <p>{value}</p>,

    }, {
      title: 'Расходные материалы',
      dataIndex: 'id',
      key: 'id',
      render: (link) => <Link to={`/costs/${link}`}>Open Document</Link>,

    },
    {
      title: 'responsible',
      dataIndex: 'responsible',
      key: 'responsible',
      render: (value) => <p>{value}</p>,

    },
    {
      title: 'Договор',
      dataIndex: 'offer',
      key: 'offer',
      render: (link) => <a href={link} target="_blank" rel="noreferrer">Открыть документ</a>,
    },
    {
      title: "Action",
      dataIndex: "action",
      render: (_: any, record: DataType) => (<><button onClick={() => handleEdit(record)}>edit</button><button onClick={() => { handleDelete(record.id) }}>delete</button></>)
    }
  ];
  useEffect(() => {
    ky('http://localhost:8080/api/order').json<DataType[]>().then((res) => (setData(res)))
  }, [])

  const handleDelete = (id: number) => {
    ky.delete(`http://localhost:8080/api/order/${id}`).json<DataType[]>().then((res) => (setData(res)))
  }
  const handleEdit = (record: object) => {
    setEdit(record)
    setX(true)
  }
  return (
    <>
      <Header />
      <Table scroll={{ x: true }} columns={columns} dataSource={data} />
      {x && <Modals value={edit} active={true} setmodal={setX} />}
    </>
  )
}

