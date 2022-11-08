import React, { useState } from 'react';
import style from "./style.module.scss"
import {Modal} from '../../components/modal/Modal';

const StatisticPage = () =>{
    const [opened, setOpened] = useState(false);
return (
    <div className={style.content}>
        <h1>stat</h1>
        <button onClick={() => setOpened(true)}>x</button>
        <Modal opened={opened} onClose={() => setOpened(false)}> <h2>Simple animation content</h2></Modal>
    </div>
);
}

export default StatisticPage;