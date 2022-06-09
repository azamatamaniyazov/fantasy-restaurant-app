import { ClipboardCheckIcon } from "@heroicons/react/outline";
import { useEffect, useState } from "react";

import { useDispatch, useSelector } from "react-redux";
import { addToCart, deleteCartProduct } from "../basket/basketSlice";

function CategoryCard(props) {
  const { id, product_name, description, price, images, isNew } = props;
  const [isAdded, setIsAdded] = useState(false);
  const cartProducts = useSelector((state) => state.basket.cartProducts);
  const dispatch = useDispatch();

  useEffect(() => {
    const isAdded = cartProducts.some((item) => item.id === id);
    setIsAdded(isAdded);
  }, [cartProducts]);

  const onAddToCart = () => {
    if (!isAdded) {
      dispatch(addToCart({ ...props, count: 1 }));
    } else {
      const updatedCartProducts = cartProducts.filter((item) => item.id !== id);
      dispatch(deleteCartProduct(updatedCartProducts));
      localStorage.setItem("cartProducts", JSON.stringify(updatedCartProducts));
    }
  };

  return (
    <div className="category-card grid grid-rows-custom-184 bg-white shadow-card pb-4 rounded-2xl transition-transform hover:scale-105">
      <div className="card-img flex items-center justify-center h-min relative">
        <img
          src="https://img.povar.ru/main/42/32/a6/e7/riba_v_multivarke_na_paru-53690.jpg"
          alt="салат"
          className="rounded-t-2xl overflow-hidden"
        />
        {isNew && (
          <div className="absolute bg-[#FEF9C3] uppercase text-red-500 font-bold py-1 px-3 rounded-tl-xl top-0 left-0">
            <small>new</small>
          </div>
        )}
      </div>
      <div className="card-info flex flex-col justify-between h-full px-4">
        <div className="flex">
          <h2 className="text-xl font-medium my-2">{product_name}</h2>
        </div>
        <p className="text-xs text-text">{description}</p>

        <div className="flex items-center">
          <span className="text-text font-medium my-2">Цена:</span>
          <span className="text-lg text-title font-medium ml-1">
            {price} сум
          </span>
        </div>
        <button
          onClick={onAddToCart}
          className={`${
            isAdded ? "btn-primary" : "btn-light"
          } shadow-btn flex items-center justify-center h-min uppercase text-sm font-medium py-3 px-6`}
        >
          <ClipboardCheckIcon className="w-5 mr-1" />
          <span>{isAdded ? "Добавлен" : "Добавить"}</span>
        </button>
      </div>
    </div>
  );
}

export default CategoryCard;
