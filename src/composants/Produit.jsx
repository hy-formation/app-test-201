import React from "react";

function Produit(props) {
  return (
    <div className="produit">
      <img
        src={"./images/" + props.infosProduit.thumbnail}
        alt="props.infosProduit.title"
      />
      <p>{props.infosProduit.title}</p>
      <p>{props.infosProduit.price}</p>
      <button type="button">Ajouter au panier</button>
    </div>
  );
}

export default Produit;
