import React from 'react';

import './styles/buttons.scss'

const Button = (props) => {
    const onClick = (e) => {
        props.sendBack(e.target.value)
    }
    return (
        <button className={props.active} onClick={onClick} value={props.title}>
            {props.title}
        </button>

    );
};

export default Button;