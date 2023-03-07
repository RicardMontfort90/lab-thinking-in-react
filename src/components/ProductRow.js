import React from "react";

const ProductRow = ({ product }) => {
    const name = product.inStock ? ( product.name ) : ( 
        <span style={{ color: "red" }}>{product.name}</span>
    );

    return (
        <tr>
            <td>{name}</td>
            <td className="price">{product.name}</td>
        </tr>
    );
};

export default ProductRow;