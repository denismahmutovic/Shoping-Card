import React, { useContext } from "react";
import { ShoppingCartContext } from "../../context/ShoppingCartContext";
import { Link } from "react-router-dom";
import ProductCard from "../../components/ProductCard/ProductCard";

export default function CartPage() {
  const { cartItems, removeFromCart, increaseQuantity, decreaseQuantity } =
    useContext(ShoppingCartContext);

  const totalPrice = cartItems.reduce(
    (quantity, product) => quantity + product.price * product.quantity,
    0
  );

  console.log(cartItems);
  return (
    <>
      {cartItems.length === 0 ? (
        <div className="m-auto my-24 w-4/12 flex flex-col items-center gap-8">
          {/* <img
            src={require("../../../images/cart_empty.png")}
            alt="Logo"
            className="w-24 h-18"
          /> */}
          <h1 className="text-lg text-slate-900 font-semibold bg-slate-200 p-1 rounded-lg">
            YOUR SHOPPING CART IS EMPTY
          </h1>
          <p className="text-md text-slate-900 text-center font-light w-4/6">
            You still have nothing in your cart. Check out our large selection
            product and start shopping.
          </p>
          <button className="text-xl text-slate-800 text-center bg-orange-400 p-2 rounded-xl">
            <Link to="/">START SHOPPING</Link>
          </button>
        </div>
      ) : (
        <div className="flex flex-col justify-center items-center h-30 ">
          {cartItems.map((product) => (
            <div
              key={product.id}
              className="flex mx-3 my-4  rounde justify-between items-center  w-2/3"
            >
              <img src={product.imgUrl} alt="nesto" width={150} height={20} />
              <div className="flex-col ml-8 justify-center">
                <h2 className="font-bold w-1/1">{product.name}</h2>
                <p>{product.name}</p>
              </div>
              <div className="mx-10 flex justify-center my-3">
                <p className="text-bold w-1/2 ">{product.price} $</p>
                <button
                  onClick={() => decreaseQuantity(product.id)}
                  className="rounded border-2 w-10 border-stone-200 h-1/2 px-1 text-center mx-3"
                >
                  -
                </button>
                <p className="">{product.quantity}</p>
                <button
                  onClick={() => increaseQuantity(product.id)}
                  className="text-black rounded border-2 w-10 border-blue-200 h-1/2 px-1 text-center mx-3"
                >
                  +
                </button>
              </div>
              <div className="mx-12 flex justify-center  items-center ">
                <p className="text-bold">One piece: {product.price} </p>
              </div>
              <div className="mx-10 flex justify-center my-10 items-center">
                Total Amout: {product.price * product.quantity} $
              </div>

              {/* <button onClick={() => removeFromCart(product.id)}></button> */}
              <svg
                className="flex justify-center items-center "
                onClick={() => removeFromCart(product.id)}
                class="h-8 w-8 text-red-500"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              >
                {" "}
                <circle cx="12" cy="12" r="10" />{" "}
                <line x1="15" y1="9" x2="9" y2="15" />{" "}
                <line x1="9" y1="9" x2="15" y2="15" />
              </svg>
            </div>
          ))}
          <div className="bg-gray-200 w-3/4 h-20 flex">
            <div>
              <h3>POSEDUJETE PROMO KUPON?</h3>
              <svg
                class="h-8 w-8 text-red-500"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z"
                />
              </svg>
            </div>
            <div>
              {" "}
              <input
                placeholder="hello"
                type={"text"}
                className="default:ring-2"
              ></input>{" "}
            </div>
          </div>
        </div>
      )}
    </>
  );
}
// total price ${totalPrice}
