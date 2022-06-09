import { MinusIcon, PlusIcon, XIcon } from "@heroicons/react/outline";
import { useDispatch, useSelector } from "react-redux";
import { deleteCartProduct, updateCounter } from "../basket/basketSlice";

function BasketCard({
  index,
  id,
  product_name,
  description,
  images,
  price,
  count,
}) {
  const products = useSelector((state) => state.basket.cartProducts);
  const dispatch = useDispatch();

  const onDelete = () => {
    const updatedCartProducts = products.filter((item) => item.id !== id);
    dispatch(deleteCartProduct(updatedCartProducts));
    localStorage.setItem("cartProducts", JSON.stringify(updatedCartProducts));
  };

  const countHandler = (type) => {
    if (type === "inc") {
      dispatch(updateCounter({ index, counter: ++count }));
    } else if (type === "dec") {
      dispatch(updateCounter({ index, counter: --count }));
      if (count === 0) {
        onDelete();
      }
    }
  };

  return (
    <div className="flex first:border-0 border-t border-gray-100 py-2">
      <div className="info flex flex-row flex-grow flex-shrink basis-0 items-center mr-2">
        <img
          src="https://img.povar.ru/main/42/32/a6/e7/riba_v_multivarke_na_paru-53690.jpg"
          alt="eat"
          className="w-32 h-20 object-contain rounded-2xl"
        />
        <div className="ml-2">
          <h3 className="text-title font-medium uppercase">{product_name}</h3>
          <p className="text-xs text-text">{description}</p>
        </div>
      </div>
      <div className="details flex items-center">
        <span className="text-title font-medium">{price * count} сум</span>
        <div className="flex items-center mx-2 bg-green-200 rounded-3xl py-2 px-3">
          <button onClick={() => countHandler("dec")}>
            <MinusIcon className="w-5 text-green-700" />
          </button>
          <span className="text-title text-lg font-medium mx-4">{count}</span>
          <button onClick={() => countHandler("inc")}>
            <PlusIcon className="w-5 text-green-700" />
          </button>
        </div>
        <button onClick={onDelete}>
          <XIcon className="w-6 " />
        </button>
      </div>
    </div>
  );
}

export default BasketCard;
