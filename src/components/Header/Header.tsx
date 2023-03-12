import React, { useState } from "react";
import { Button, Modal } from 'antd'
import './header.scss'


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
        <Modal
            title="Vertically centered modal dialog"
            centered
            open={modal2Open}
            onOk={() => setModal2Open(false)}
            onCancel={() => setModal2Open(false)}
        >
            <p>some contents...</p>
            <p>some contents...</p>
            <p>some contents...</p>
        </Modal>
    </div>;
};
