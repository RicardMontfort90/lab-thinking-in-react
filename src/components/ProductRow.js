import React from "react";

const ProductRow = ({ product }) => {
    const name = product.inStock ? ( product.name ) : ( 
        <span style={{ color: "red" }}>{product.name}</span>
    );

    return (
        <tr>
            
        </tr>
    )
}


export default ProductRow;