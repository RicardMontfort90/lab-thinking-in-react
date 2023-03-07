import { useState } from "react";
import SearchBar from "./SearchBar";
import ProductTable from "./ProductTable";
import jsonData from "/data.json";


function ProductsPage() {
    const [products, setProducts] = useState(jsonData);



    return (
        <div>
            <h1>IronStore</h1>
            <SearchBar 
                
            />
        </div>
    )
}

export default ProductsPage;