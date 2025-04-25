import { useParams } from "react-router-dom";
import { products } from "../data";
import { useState } from "react";

export default function Category() {
  const { categoryId } = useParams();
  const [favorites, setFavorites] = useState(
    JSON.parse(localStorage.getItem("favorites") || "[]")
  );
  const [basket, setBasket] = useState(
    JSON.parse(localStorage.getItem("basket") || "[]")
  );

  const addToFavorites = (product) => {
    const updated = [...favorites, product];
    setFavorites(updated);
    localStorage.setItem("favorites", JSON.stringify(updated));
  };

  const addToBasket = (product) => {
    const updated = [...basket, product];
    setBasket(updated);
    localStorage.setItem("basket", JSON.stringify(updated));
  };

  const filteredProducts = categoryId === "all"
    ? products
    : products.filter(p => p.category === categoryId);

  return (
    <div>
      <h2 className="text-xl font-bold mb-4 capitalize">Category: {categoryId}</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {filteredProducts.map(product => (
          <div key={product.id} className="border p-4 rounded shadow">
            <h3 className="font-semibold">{product.name}</h3>
            <p>Price: ${product.price}</p>
            <div className="space-x-2 mt-2">
              <button onClick={() => addToFavorites(product)} className="bg-pink-500 text-white px-2 py-1 rounded">Favorite</button>
              <button onClick={() => addToBasket(product)} className="bg-green-500 text-white px-2 py-1 rounded">Add to Basket</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}