import React, { InputHTMLAttributes, FC } from 'react';

import './style.css'
interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
    label: string;
    name: string;
}

/* 
    ...rest → Permite que coloque qualquer outro atributo, além dos definidos
*/


const Input: FC<InputProps> = ({label, name, ...rest}) => {
    return (
        <div>
            <label htmlFor={name}>{label}</label> <br/>
            <input type="text" id={name} {...rest}/>
        </div>
    );
}

export default Input;