import React from "react";

function SearchBar ({ searchText, inStockOnly, onSearchInputChange, onInStockInputChange }) {
    return (
        <div>
            <input 
                type="text"
                placeholder="Search..."
                value={searchText}
                onChange={onSearchInputChange}
            />
        </div>
    )
}

export default SearchBar;