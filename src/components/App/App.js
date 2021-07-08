import React from 'react';
import Header from '../Header/Header'
import './App.css';
import SearchBox from '../SearchBox/SearchBox';
import ResultsContainer from '../ResultsContainer/ResultsContainer';
import {useState} from 'react';

const name = require('@rstacruz/startup-name-generator');


const App = () => {

    const [myState,setMyState] = useState({
        headerText: "Name It!",
        searchText: undefined,
        suggetedNames: []
    });

    const handleInputChange = (keyword) => {

        setMyState({
            headerText: "Name It!",
            searchText: keyword,
            suggetedNames: []
        });

        if (keyword.length > 0) {

            let names = name(keyword);

            let uniqueNames = [];
            names.forEach((name) => {
                if (!uniqueNames.includes(name)) {
                    uniqueNames.push(name);
                }
            });

            setMyState({
                headerText: "Name It!",
                searchText: keyword,
                suggetedNames: uniqueNames
            });
        }
    }

    return (
        <div>
            <Header
                headerText={myState.headerText}
                searchText={myState.searchText}
            />
            <SearchBox
                handleInputChange={handleInputChange}
            />
            <ResultsContainer
                suggestedNames={myState.suggetedNames}
            />
        </div>
    );
}

export default App;