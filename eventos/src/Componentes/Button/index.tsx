import React, { FC } from 'react';

import './style.css';

interface ButtonProps{
    value: string;
}

const Button: FC<ButtonProps> = ({value}) => {
    return(
        <input className="button" type="submit" value={value} />
    );
}

export default Button;