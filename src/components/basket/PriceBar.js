import { MinusIcon, PlusIcon } from "@heroicons/react/outline";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { setPeoples } from "./basketSlice";
import {
  changeModalState,
  changeDropdownState,
  setDateError,
} from "../componentsSlice";
import useAuth from "../../hooks/useAuth";

function PriceBar({ handleSubmit, reset }) {
  const auth = useAuth();
  let { peoples, cartProducts } = useSelector((state) => state.basket);
  const [musicPrice, setMusicPrice] = useState(10000 * peoples);
  const [menuPrice, setMenuPrice] = useState();
  const [totalPrice, setTotalPrice] = useState();
  const navigate = useNavigate();
  const dispatch = useDispatch();

  useEffect(() => {
    const prices = cartProducts.map((item) => {
      return item.price * item.count;
    });

    const productsPrice = prices.reduce((prev, curr) => {
      return prev + curr;
    }, 0);

    const servicePrice = (productsPrice + musicPrice) * 0.15;

    setMenuPrice(productsPrice + musicPrice);
    setTotalPrice(musicPrice + productsPrice + servicePrice);
  }, [cartProducts, musicPrice]);

  const countHandler = (type) => {
    if (type === "inc" && peoples < 30) {
      dispatch(setPeoples(++peoples));
    } else if (type === "dec" && peoples > 1) {
      dispatch(setPeoples(--peoples));
    }
    setMusicPrice(10000 * peoples);
    localStorage.setItem("peoples", peoples);
  };

  const sendBtnHandler = (data) => {
    if (auth.user) {
      const bills = {
        peoples,
        totalPrice,
      };
      if (data.date.getHours() === 0) {
        dispatch(setDateError("вы не задали времю"));
      } else {
        dispatch(changeModalState(true));
        console.log({ ...data, ...bills });
        dispatch(setDateError(null));
        reset();
      }
    } else {
      dispatch(changeDropdownState(false));
    }
  };

  const contiuneBtnHandler = () => {
    navigate("/booking");
  };

  return (
    <div className="price-bar flex-grow flex-shrink basis-0 sticky top-10 mb-7 h-max">
      <div className="bg-white p-5 shadow-def rounded-2xl mb-4">
        <div className="flex justify-between">
          <span>За музыку</span>
          <span>10000 сум</span>
        </div>
        <div className="flex items-center justify-between my-4">
          <span>Число гостей</span>
          <div className="flex items-center bg-green-200 rounded-2xl py-1 px-3">
            <button onClick={() => countHandler("dec")}>
              <MinusIcon className="w-3 text-green-700" />
            </button>
            <span className="text-title font-medium mx-3">{peoples}</span>
            <button onClick={() => countHandler("inc")}>
              <PlusIcon className="w-3 text-green-700" />
            </button>
          </div>
        </div>
        <div className="flex justify-between font-bold">
          <span>Итого</span>
          <span>{musicPrice} сум</span>
        </div>
      </div>

      <div className="bg-white p-5 shadow-def rounded-2xl mb-4">
        <div className="flex justify-between">
          <span>Ваш заказ</span>
          <span>{menuPrice} сум</span>
        </div>
        <div className="flex justify-between my-4">
          <span>За обслуживание</span>
          <span>15%</span>
        </div>
        <div className="flex justify-between font-bold">
          <span>К оплате</span>
          <span>{totalPrice} сум</span>
        </div>
      </div>

      <button
        onClick={
          handleSubmit ? handleSubmit(sendBtnHandler) : contiuneBtnHandler
        }
        className="btn-primary shadow-btn p-2 uppercase text-sm"
      >
        {handleSubmit ? "Забронировать" : "Продолжить"}
      </button>
    </div>
  );
}

export default PriceBar;
