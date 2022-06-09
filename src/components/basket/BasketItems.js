import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import BasketCard from "./BasketCard";

function BasketItems() {
  const products = useSelector((state) => state.basket.cartProducts);

  useEffect(() => {
    localStorage.setItem("cartProducts", JSON.stringify(products));
  }, [products]);

  return (
    <div className="cart-items h-max bg-white mr-4 py-1 px-3 shadow-def rounded-2xl flex-grow-3 flex-shrink basis-0">
      {products.length > 0 ? (
        products.map((item, index) => {
          return <BasketCard key={item.id} index={index} {...item} />;
        })
      ) : (
        <h3 className="text-custom-red text-center p-5">Ваша корзина пуста</h3>
      )}
    </div>
  );
}

export default BasketItems;
