import React from "react";
import './SearchBox.css';

// We are now receiving searchChange as a function
const SearchBox = ({ searchChange }) => {
    return (
        <div className="searchbox-container">
            <input
                className="searchbox"
                type='search'
                placeholder='search robots'
                onChange={searchChange}
            />
        </div>
    );
}

export default SearchBox;