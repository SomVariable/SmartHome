import React from 'react';
import addMember from '../../img/content/addMember.png';
import Member from '../../components/member/Member';
import style from "./style.module.scss"


const MembersPage = props =>{
return (
    <div className={style.memberPage}>
        <h2 className={style.header}>Members</h2>
        <ul className={style.items}>
            <li className={style.member}>
                <Member userName = "Igor Igorew" userRole = "Owner" userStatus = "Status: At home"/>
            </li>
            <li className={style.member}>
                <Member userName = "Someone" userRole = "Owner" userStatus = "Status: is not home"/>
            </li>
            
            <li className={style.member}>
                <div className={style.addMember} style= {{backgroundImage: `url(${addMember})`}}></div>
            </li>
        </ul>
        
    </div>
);
}

export default MembersPage;