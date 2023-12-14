import React from "react";
import Produit from "./Produit";

function Produits({ products }) {
  return (
    <div className="produits">
      {products.map((item) => (
        <Produit infosProduit={item} key={item.id} />
      ))}
    </div>
  );
}

export default Produits;
