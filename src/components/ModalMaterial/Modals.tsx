import React, { useEffect, useState } from 'react';
import { Button, Form, Input, Modal } from 'antd';
import "./Modal.scss"
import axios from 'axios';
import type EditOrder from '../../types/costs';
import { useMediaQuery } from 'react-responsive';


const onFinishFailed = (errorInfo: any) => {
  console.log('Failed:', errorInfo);
};
type Modals = {
  active: boolean;
  setmodal: React.Dispatch<React.SetStateAction<boolean>>;
  setdata: React.Dispatch<React.SetStateAction<EditOrder[]>>;
  ids: string | undefined;
}
type EditOrders = {
    id: number,
    title: string,
    price: number,
    user_id?: string,
}
export const ModalMaterial: React.FC<Modals> = ({ active, setmodal, ids, setdata}): JSX.Element => {
  const [modal2Open, setModal2Open] = useState<boolean>(false);

  const onFinish = (values: EditOrders) => {
    console.log('Success:', values);
  
    values.user_id = ids
      axios.post('http://86.110.212.178:8081/api/material', values).then((res) => {
       
        setModal2Open(false)
        setmodal(false)
        axios.get(`http://86.110.212.178:8081/api/material?id=${ids}`).then((res) => {
          setdata(res.data)
        })
      })
    }

  const onExit = () => {
    setModal2Open(false)
    setmodal(false)
  }
  useEffect(() => {
    setModal2Open(active)
    
  }, [])
  const media =  useMediaQuery({ query: '(min-width: 1199px)' }) ? { maxWidth: 1200 } : { maxWidth: 480 }

  return (
    <Modal
      title="Добавить материал"
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
        style={media}
        initialValues={{
          title:"",
          price: "",
        }}
        onFinish={onFinish}
        onFinishFailed={onFinishFailed}
        autoComplete="off"
      >
   
        <div className="input_card">
          <Form.Item
            label="Наименование материала"
            name="title"
            rules={[{ required: true, message: 'Please input your username!' }]}
          >
            <Input />

          </Form.Item>
          <Form.Item
            label="Сумма"
            name="price"
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

