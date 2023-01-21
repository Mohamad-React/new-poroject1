import React from 'react';
import { useState } from 'react';
import { Icon } from 'react-icons-kit';
import { eye } from 'react-icons-kit/icomoon/eye';
import { view_off } from 'react-icons-kit/ikons/view_off'

import styles from "./Input.module.css"

const Input = () => {
    const [type,setType] = useState("password");
    const [icons,setIcons]= useState(view_off)


    const changeType = ()=> {
        if(type==="password"){
            setType("text")
            setIcons(view_off)
        }else {
            setType("password")
            setIcons(eye)
            
        }
    }
    return (
        <div className={styles.container}>
            <div className={styles.myinput}>
                <input type={type} />
                <span onClick={changeType}><Icon icon={icons} /></span>
            </div>

        </div>
    );
}

export default Input;
