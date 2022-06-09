import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

import { ClipboardCheckIcon } from "@heroicons/react/outline";

function CartBtn({ modify }) {
  const { cartProducts } = useSelector((state) => state.basket);

  return (
    <div className="flex items-center">
      <Link to="/basket" className="cart-btn flex items-center">
        <button
          className={`flex items-center h-min p-3 rounded-full ${
            modify ? "text-custom-red bg-white" : "text-white bg-custom-red"
          }`}
        >
          <ClipboardCheckIcon className="w-5" />
          <span className="text-xl font-medium">{cartProducts.length}</span>
        </button>
      </Link>
    </div>
  );
}

export default CartBtn;
