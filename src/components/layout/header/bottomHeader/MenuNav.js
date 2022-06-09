import { useEffect, useState } from "react";
import AnchorLink from "react-anchor-link-smooth-scroll";
import { useGetCategoriesQuery } from "../../../../api/apiSlice";
import CartBtn from "./CartBtn";

function MenuNav({ hidden }) {
  const { data: categories = [] } = useGetCategoriesQuery();
  const [fixedMenu, setFixedMenu] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", changeMenuPosition);
    return () => {
      window.removeEventListener("scroll", changeMenuPosition);
    };
  }, [window.scrollY]);

  const changeMenuPosition = () => {
    if (window.scrollY >= 350) {
      setFixedMenu(true);
    } else {
      setFixedMenu(false);
    }
  };

  const renderListItems = categories.map((item) => {
    return (
      <li key={item.id} className="first:m-0 ml-8">
        <AnchorLink
          href={`#${item.category_name}`}
          className="py-4 px-5 rounded-lg hover:bg-white hover:text-custom-red transition-colors"
        >
          {item.category_name}
        </AnchorLink>
      </li>
    );
  });
  return (
    <>
      <div className={`${hidden} max-w-6xl mx-auto px-2 relative`}>
        <ul className="menu uppercase flex justify-center text-white bg-custom-red shadow-menu py-5 px-2 rounded-xl -mt-14">
          {renderListItems}
        </ul>
      </div>
      <div
        className={`${hidden} w-full bg-custom-red transition-all fixed ${
          fixedMenu ? "top-0" : "-top-32"
        } z-50 text-white py-3`}
      >
        <div className="max-w-6xl mx-auto px-2 flex items-center justify-between w-full">
          <div className="logo font-bold mr-6 ">
            <h1 className="text-2xl leading-none tracking-tight ">
              Restaurant
            </h1>
            <span className="uppercase tracking-widest">fantasy</span>
          </div>
          <ul className="flex uppercase items-center">{renderListItems}</ul>
          <CartBtn modify={fixedMenu} />
        </div>
      </div>
    </>
  );
}

export default MenuNav;
