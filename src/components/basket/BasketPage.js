import BasketItems from "./BasketItems";
import PriceBar from "./PriceBar";

function BasketPage() {
  return (
    <div className="basket-page max-w-6xl mx-auto px-2 pt-2 pb-10 flex flex-row justify-around relative">
      <BasketItems />
      <PriceBar />
    </div>
  );
}

export default BasketPage;
