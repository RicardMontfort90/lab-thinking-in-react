import { useState } from "react";
import SearchBar from "./SearchBar";
import ProductTable from "./ProductTable";
import jsonData from "/data.json";


function ProductsPage() {
    const [products, setProducts] = useState(jsonData);



    
  const updateProducts = (newProducts) => {
    setProducts(newProducts);
  };


    return (
        <div>
            <h1>IronStore</h1>
            <SearchBar 


                onUpdateProducts={updateProducts}
            />
            
        </div>
    )
}

export default ProductsPage;