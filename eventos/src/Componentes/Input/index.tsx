import React, { InputHTMLAttributes, FC } from 'react';

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
    label: string;
    name: string;
}


const Input: FC<InputProps> = ({label, name, ...rest}) => {
    return (
        <div>
            <label></label>
            <input type="text" />
        </div>
    );
}

export default Input;