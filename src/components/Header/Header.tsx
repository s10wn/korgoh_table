import React, { useState } from "react";
import { Button } from 'antd'
import './header.scss'
import { Modals } from "../Modal/Modals";


export const Header = () => {
    const [modal2Open, setModal2Open] = useState(false);

    return <div className="header">
        <div className="header_logo">
            <div className="logo"></div>
            <h3>Здравствуйте, Парвиз!</h3>
        </div>
        <div className="header_btn">
            <Button onClick={() => setModal2Open(true)} type="primary">Добавить заказ</Button>
        </div>
        {modal2Open && <Modals active={true} setmodal={setModal2Open} />}
    </div>;
};
