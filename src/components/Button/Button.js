import React from 'react';

const Button = (props) => {
    const btnCss = `btn ${props.typeBtn} ${props.css}`
    return (
        <button className={btnCss} onClick={props.clic} style={props.select?{opacity:1}:{opacity:0.5}}>{props.children}</button>
    );
};

export default Button;