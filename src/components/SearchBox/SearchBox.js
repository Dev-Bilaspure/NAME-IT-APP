import React from 'react';
import './SearchBox.css';

const SearchBox = (props) => {
    return (
        <div className="search-container">
            <input
                placeholder="Type keywords"
                type="text"
                className="search-input"
                onChange={(e) => props.handleInputChange(e.target.value)}
            />
        </div>
    );
}
export default SearchBox;