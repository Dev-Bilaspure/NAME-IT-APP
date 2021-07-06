import React from 'react';
import Header from '../Header/Header'
import './App.css';
import SearchBox from '../SearchBox/SearchBox';


class App extends React.Component {
    state = {
        headerText: "Name It!",
        searchText: undefined
    }

    handleInputChange = (data) => {
        this.setState(() => {
            return ({
                searchText: data
            });
        });
    }

    render() {
        return (
            <div>
                <Header
                    headerText={this.state.headerText}
                    searchText={this.state.searchText}
                />
                <SearchBox handleInputChange={this.handleInputChange} />
            </div>
        );
    }
}

export default App;