import React from 'react';
import NameCard from '../NameCard/NameCard';
import './ResultsContainer.css';
const ResultsContainer = (props) => {
    return (
        <div className="result-container">
            {
                props.suggestedNames.map((name) => (
                    <NameCard
                        key={name}
                        suggestedName={name}
                    />
                ))
            }
        </div>
    );
}

export default ResultsContainer;