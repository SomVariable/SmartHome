import React from 'react';
import style from '../../style/styleSubcomponents/block.module.css';

const Block = props =>{
return (
    <div className={style.block}>
        <div className={style.container}>
            <h3 className={style.name}>{props.name}</h3>
            <p className={style.content}>{props.content}</p>
        </div>
    </div>
);
}

export default Block;