import React, { useContext } from "react";
import ProductCard from "../../components/ProductCard/ProductCard";
import products from "../../common/items.json";
import { ShoppingCartContext } from "../../context/ShoppingCartContext";

export default function HomePage() {
  const { addToCart } = useContext(ShoppingCartContext);
  return (
    <>
      <div className="flex w-full justify-center mt-5  flex-row  ">
        <img
          className=" "
          src="https://www.nylon.com.sg/wp-content/uploads/2022/09/apple-fall-2022-header.png"
          alt="slika"
        />
      </div>

      <div className="flex">
        {products.map((product) => (
          <ProductCard
            key={product.id}
            price={product.price}
            image={product.imgUrl}
            title={product.name}
            onClick={() => addToCart(product)}
          />
        ))}
      </div>
    </>
  );
}
