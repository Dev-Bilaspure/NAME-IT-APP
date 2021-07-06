import React from 'react';
import './SearchBox.css';

class SearchBox extends React.Component {

    render() {
        return (
            <div className="search-container">
                <input
                    placeholder="Type keywords"
                    type="text"
                    className="search-input"
                    onChange={(e) => this.props.handleInputChange(e.target.value)}
                />

            </div>
        );
    }
}

export default SearchBox;