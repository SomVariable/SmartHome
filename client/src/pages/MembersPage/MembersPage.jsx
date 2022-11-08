import React from 'react';
import addMember from '../../img/content/addMember.png';
import Member from '../../components/member/Member';
import style from "./style.module.scss"


const MembersPage = props =>{
return (
    <div className={style.memberPage}>
        <h2 className={style.header}>Members</h2>
        <ul className={style.items}>
            <Member userName = "Igor Igorew" userRole = "Owner" userStatus = "Status: At home"/>
            <Member userName = "Someone" userRole = "Owner" userStatus = "Status: is not home"/>
            <li className={style.newMember}><img src={addMember} alt="" /></li>
        </ul>
        
    </div>
);
}

export default MembersPage;