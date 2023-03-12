import React from 'react';
import { Table } from 'antd';
import type { ColumnsType } from 'antd/es/table';
import type { DataType } from './types/DataType';
import { Link } from 'react-router-dom';
import { data } from './constant/data';
import { Header } from './components/Header/Header';



const columns: ColumnsType<DataType> = [
  {
    title: "#",
    dataIndex: 'id',
    key: 'id',
  },
  {
    title: 'Название заказ',
    dataIndex: 'name',
    key: 'name',
    render: (text) => <a>{text}</a>,
  },
  {
    title: 'Адрес проекта ',
    dataIndex: 'address',
    key: 'address',
    responsive: ['md'],
  },
  {
    title: 'Начало работы',
    dataIndex: 'created_date',
    key: 'created_date',
    responsive: ['md'],
  },
  {
    title: 'Конец работы',
    dataIndex: 'end_plans',
    key: 'end_plans',
    responsive: ['md'],
  }, {
    title: 'Реальная дата',
    dataIndex: 'real_ending',
    key: 'real_ending',
    responsive: ['md'],
  }, {
    title: 'Сумма',
    dataIndex: 'price',
    key: 'price',
    responsive: ['md'],
  }, {
    title: 'Предоплата',
    dataIndex: 'pred',
    key: 'pred',
    responsive: ['md'],
  }, {
    title: 'Остаток',
    dataIndex: 'ostatok',
    key: 'ostatok',
    responsive: ['md'],
  },
  {
    title: 'Статус',
    dataIndex: 'status',
    key: 'status',
    responsive: ['md'],
  }, {
    title: 'Комментарии',
    dataIndex: 'comment',
    key: 'comment',
    responsive: ['md'],
  }, {
    title: 'Проблемы',
    dataIndex: 'warning',
    key: 'warning',
    responsive: ['md'],
  }, {
    title: 'Расходные материалы',
    dataIndex: 'rasxod_material',
    key: 'whoisboss',
    render: (link) => <Link to={`/costs/${link}`}>Open Document</Link>,

    responsive: ['md'],
  },
  {
    title: 'Договор',
    dataIndex: 'deal',
    key: 'deal',
    render: (link) => <a href={link} target="_blank" rel="noreferrer">Открыть документ</a>,
    responsive: ['md'],
  },
];



export const App: React.FC = () => (
  <>
    <Header />
    <Table columns={columns} dataSource={data} />
  </>
)

