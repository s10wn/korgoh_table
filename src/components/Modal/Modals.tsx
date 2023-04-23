import React, { useEffect, useState } from 'react';
import { Button, Form, Input, Modal } from 'antd';
import "./Modal.scss"
import type { DataType } from '../../types/DataType';
import axios from 'axios';


const onFinishFailed = (errorInfo: any) => {
  console.log('Failed:', errorInfo);
};
type Modals = {
  active: boolean;
  setmodal: React.Dispatch<React.SetStateAction<boolean>>;
  value?: object;
  add?: boolean;
}
type EditOrder = {
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
  responsible?: string,
  offer?: string,
}
export const Modals: React.FC<Modals> = ({ active, setmodal, value, add }): JSX.Element => {
  const [modal2Open, setModal2Open] = useState<boolean>(false);
  const [val, setVal] = useState<EditOrder>({})

  const onFinish = (values: EditOrder) => {
    console.log('Success:', values);

    if (add) {
      axios.post('http://86.110.212.178:8081/api/order', values).then(() => {
        setModal2Open(false)
        setmodal(false)
      })
    }
    else {
      values.id = val.id
      axios.put('http://86.110.212.178:8081/api/order', values).then(() => {
        setModal2Open(false)
        setmodal(false)
      })
    }
  };

  const onExit = () => {
    setModal2Open(false)
    setmodal(false)
  }
  useEffect(() => {
    setModal2Open(active)
    if (value) {
      setVal(value)
    }
  }, [])

  return (
    <Modal
      title="Добавить заказ"
      centered
      open={modal2Open}
      onCancel={onExit}
      footer={null}
    >
      <Form
        name="basic"
        className='form_add'
        labelCol={{ span: 8 }}
        wrapperCol={{ span: 16 }}
        style={{ maxWidth: 1200 }}
        initialValues={{
          id: val.id,
          name: val.name,
          address: val.address,
          name_order: val.name_order,
          created_date: val.created_date,
          end_date: val.end_date,
          actual_date: val.actual_date,
          price: val.price,
          prepayment: val.prepayment,
          status: val.status,
          comment: val.comment,
          difficulty: val.difficulty,
          responsible: val.responsible,
          offer: val.offer
        }}
        onFinish={onFinish}
        onFinishFailed={onFinishFailed}
        autoComplete="off"
      >
        {/* <Form.Item
          label="Наименование заказа"
          name="id"
          rules={[{ required: true, message: 'Please input your username!' }]}
        >
          <Input />
        </Form.Item> */}
        <div className="input_card">
          <Form.Item
            label="Наименование заказа"
            name="name"
            rules={[{ required: true, message: 'Please input your username!' }]}
          >
            <Input />
          </Form.Item>
          <Form.Item
            label="Адрес заказа"
            name="address"

            rules={[{ required: true, message: 'Please input your username!' }]}
          >
            <Input />

          </Form.Item>
          <Form.Item
            label="Имя Заказчика"
            name="name_order"
            rules={[{ required: true, message: 'Please input your username!' }]}
          >
            <Input />
          </Form.Item>
        </div>

        <div className="input_card">
          <Form.Item
            label="Дата начало"
            name="created_date"
            rules={[{ required: true, message: 'Please input your username!' }]}
          >
            <Input />

          </Form.Item>
          <Form.Item
            label="Дата окончание "
            name="end_date"
            rules={[{ required: true, message: 'Please input your username!' }]}
          >
            <Input />

          </Form.Item>
          <Form.Item
            label="Реальная дата"
            name="actual_date"
            rules={[{ required: true, message: 'Please input your username!' }]}
          >
            <Input />

          </Form.Item>
        </div>
        <div className="input_card">
          <Form.Item
            label="Сумма заказа"
            name="price"
            rules={[{ required: true, message: 'Please input your username!' }]}
          >
            <Input />

          </Form.Item>
          <Form.Item
            label="Предоплата"
            name="prepayment"
            rules={[{ required: true, message: 'Please input your username!' }]}
          >
            <Input />
          </Form.Item>
          <Form.Item
            label="Статус заказа"
            name="status"
            rules={[{ required: true, message: 'Please input your username!' }]}
          >
            <Input />

          </Form.Item>
        </div>
        <div className="input_card">
          <Form.Item
            label="Комент"
            name="comment"
            rules={[{ required: true, message: 'Please input your username!' }]}
          >
            <Input />

          </Form.Item>
          <Form.Item
            label="Проблемы"
            name="difficulty"
            rules={[{ required: true, message: 'Please input your username!' }]}
          >
            <Input />

          </Form.Item>
        </div>
        <div className="input_card">

          <Form.Item
            label="Ответственный"
            name="responsible"
            rules={[{ required: true, message: 'Please input your username!' }]}
          >
            <Input />

          </Form.Item>
          <Form.Item
            label="Договор"
            name="offer"
            rules={[{ required: true, message: 'Please input your username!' }]}
          >
            <Input />

          </Form.Item>
          <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
            <Button type="primary" htmlType="submit">
              Добавить
            </Button>
          </Form.Item>
        </div>
      </Form>
    </Modal>

  )
}

