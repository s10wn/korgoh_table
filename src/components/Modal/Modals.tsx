import React, { useEffect, useState } from 'react';
import { Button, Form, Input, Modal } from 'antd';
import "./Modal.scss"
import ky from 'ky';


const onFinishFailed = (errorInfo: any) => {
  console.log('Failed:', errorInfo);
};
type Modals = {
  active: boolean;
  setmodal: React.Dispatch<React.SetStateAction<boolean>>;
  value?: object;
}
export const Modals: React.FC<Modals> = ({ active, setmodal, value }): JSX.Element => {
  const [modal2Open, setModal2Open] = useState<boolean>(false);
  const [val, setVal] = useState({})
  const onFinish = (values: any) => {
    console.log('Success:', values);
    console.log(values)
    ky.post('http://localhost:8080/api/order', { json: values }).json().then((res) => {
      setModal2Open(false)
      setmodal(false)
    })
  };


  const onExit = () => {
    setModal2Open(false)
    setmodal(false)
  }
  useEffect(() => {
    setModal2Open(active)
    console.log(value)
  }, [])

  return (
    <Modal
      title="Vertically centered modal dialog"
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
        initialValues={{ remember: true }}
        onFinish={onFinish}
        onFinishFailed={onFinishFailed}
        autoComplete="off"
      >
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
            <Input defaultValue={'zxc'} />
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
              Submit
            </Button>
          </Form.Item>
        </div>
      </Form>
    </Modal>

  )
}

