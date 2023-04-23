import React from "react";
import  PinCode  from '@uiw/react-pin-code';
import { useNavigate } from "react-router-dom";
import { message } from 'antd';

export const Login = () => {
    const [messageApi, contextHolder] = message.useMessage();

const navigate = useNavigate();

const isLogin = (val: string[]) => {
    if(Number(val.join('')) === 1234){
        localStorage.setItem('authorized', 'true')
        messageApi.open({
            type: 'success',
            content: 'Вы успешно вошли',
          });
          setTimeout(() => {
            navigate('/', {replace: true})
          }, 1000);
    }
    else{
        messageApi.open({
            type: 'error',
            content: 'Вы ввели неверный пин-код',
          });
    }
}
  return <div>Login
    {contextHolder}
    <PinCode autoFocus value={['','','','']} onChange={(val) => val[3] !== '' && isLogin(val)}  />
    
  </div>;
};
