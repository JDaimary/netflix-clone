import React, { useEffect, useState } from "react";
import "../css/Plans.css";
import db from "../firebase";

function Plans() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    db.collection("products")
      .where("active", "==", true)
      .get()
      .then((querySnapshot) => {
        const products = {};
        querySnapshot.forEach(async (productDoc) => {
          products[productDoc.id] = productDoc.data();
          const priceSnap = await productDoc.ref.collection("price").get();
          priceSnap.docs.forEach((price) => {
            products[productDoc.id].price = {
              priceId: price.id,
              priceData: price.data(),
            };
          });
        });
        setProducts(products);
      });
  }, []);

  console.log(products);

  return (
    <div className="plans">
      {Object.entries(products).map(([productId, productData]) => {
        return (
          <div className="plans-plan">
            <div className="plans-info">
              <h5>{productData.name}</h5>
              <h6>{productData.description}</h6>
            </div>
            <button>Subscribe</button>
          </div>
        );
      })}
    </div>
  );
}

export default Plans;
