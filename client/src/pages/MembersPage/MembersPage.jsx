import React from 'react';
import style from '../../style/content.module.css';
import addMember from '../../img/content/addMember.png';
import Member from '../../img/content/member.png';

const MembersPage = props =>{
return (
    <div className={style.content}>
        <div className={style.container}>
            <h2 className={style.header}>Members</h2>
            <ul className={style.items}>
                <li className={style.member}>
                    <img src={Member} alt="" />
                    <p className={style.name}>Igor Igorew</p>
                    <p className={style.post}>Owner</p>
                    <p className={style.status}>Status: At home</p>
                </li>
                <li className={style.member}>
                    <img src={Member} alt="" />
                        <p className={style.name}>Someone</p>
                        <p className={style.post}>Owner</p>
                        <p className={style.status}>Status: is not home</p>
                    </li>
                <li className={style.newMember}><img src={addMember} alt="" /></li>
            </ul>
        </div>
    </div>
);
}

export default MembersPage;