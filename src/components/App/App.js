import React from 'react';
import Header from '../Header/Header'
import './App.css';
import SearchBox from '../SearchBox/SearchBox';
import ResultsContainer from '../ResultsContainer/ResultsContainer';

const name = require('@rstacruz/startup-name-generator');

class App extends React.Component {
    state = {
        headerText: "Name It!",
        searchText: undefined,
        suggestedNames: []
    }

    handleInputChange = (keyword) => {

        this.setState(() => {
            return ({
                searchText: keyword,
                suggestedNames: []
            });
        });
        if (keyword.length > 0) {

            let names = name(keyword);

            let uniqueNames = [];
            names.forEach((name) => {
                if (!uniqueNames.includes(name)) {
                    uniqueNames.push(name);
                }
            });

            this.setState(() => {
                return ({
                    suggestedNames: uniqueNames
                });
            });
        }
    }

    render() {
        return (
            <div>
                <Header
                    headerText={this.state.headerText}
                    searchText={this.state.searchText}
                />
                <SearchBox
                    handleInputChange={this.handleInputChange}
                />
                <ResultsContainer
                    suggestedNames={this.state.suggestedNames}
                />
            </div>
        );
    }
}

export default App;