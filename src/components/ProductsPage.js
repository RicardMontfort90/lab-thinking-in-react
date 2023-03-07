import { useState } from "react";
import SearchBar from "./SearchBar";
import ProductTable from "./ProductTable";
import jsonData from "../data.json"


function ProductsPage() {
    const [products, setProducts] = useState(jsonData);
    const [searchText, setSearchText] = useState("");
    const [inStockOnly, setInStockOnly] = useState(false);


    const handleSearchInputChange = (e) => {
        setSearchText(e.target.value);
    };

    const handleInStockInputChange = (e) => {
        setInStockOnly(e.target.checked);
    };


    return (
        <div>
            <h1>IronStore</h1>
            <SearchBar 
                searchText={searchText}
                onSearchInputChange={handleSearchInputChange}

            />
            
        </div>
    )
}

export default ProductsPage;