import React from 'react';
import { BsEyeFill } from "react-icons/fa";

const Input = () => {
    return (
        <div >
            <div>
                <input type="password" />
            </div>
            <span><BsEyeFill /></span>
        </div>
    );
}

export default Input;
