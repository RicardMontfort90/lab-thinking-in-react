import { useState } from "react";
import SearchBar from "./SearchBar";



function ProductsPage() {
    
    const [searchText, ] = useState("");



    


    return (
        <div>
            <h1>IronStore</h1>
            <SearchBar 
                searchText={searchText}

                
            />
            
        </div>
    )
}

export default ProductsPage;