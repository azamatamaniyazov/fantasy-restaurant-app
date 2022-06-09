import { useLocation } from "react-router-dom";
import CartBtn from "./CartBtn";
import MenuNav from "./MenuNav";
import SiteNav from "./SiteNav";

function BottomHeader() {
  const location = useLocation();

  const hidden = location.pathname !== "/menu" && "hidden";

  return (
    <div className="bottom-header">
      <div className="bg-bg shadow-header mb-8">
        <div
          className={`max-w-6xl mx-auto flex items-center justify-between px-2 pt-4 ${
            hidden ? "pb-4" : "pb-9"
          }`}
        >
          <SiteNav />
          <CartBtn />
        </div>
      </div>
      <MenuNav hidden={hidden} />
    </div>
  );
}

export default BottomHeader;
