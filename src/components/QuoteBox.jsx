import React from 'react';

const QuoteBox = ({quote, author, color}) => {
    return (
        <div>
            <div className="quote-container" style={{color: color}}>
                    <i class="fa-solid fa-quote-left"></i>
                    <p className="quote">{quote}</p>
            </div>
            <p className="quote-author" style={{color: color}}>{author}</p>
        </div>
    );
};

export default QuoteBox;