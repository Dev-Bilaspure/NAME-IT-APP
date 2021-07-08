import React from 'react';
import './NameCard.css';

const nameCheapUrl = "https://www.namecheap.com/domains/registration/results/?domain=%27%3B";
const NameCard = (props) => {
    return (
        <a href={`${nameCheapUrl}${props.suggestedName}`} target="_blank" rel="noreferrer" >
            <div className="result-name-card">
                <p className="result-name">{props.suggestedName}</p>
            </div>
        </a>

    );
}

export default NameCard;