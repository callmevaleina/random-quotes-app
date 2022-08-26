import React from 'react';

const Button = ({button, background}) => {
    return (
        <div>
            <button className="next-quote" onClick={button} style={{background: background}}>
                <i class="fa-solid fa-angle-right"></i>
            </button>
        </div>
    );
};

export default Button;