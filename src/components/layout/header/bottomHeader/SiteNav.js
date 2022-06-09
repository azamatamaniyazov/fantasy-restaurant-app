import { NavLink } from "react-router-dom";

function SiteNav() {
  const setActiveClass = ({ isActive }) => {
    return `${
      isActive ? "active-menu" : "hover:active-menu"
    } px-4 py-2 rounded-3xl transition-colors`;
  };

  return (
    <ul className="text-red-700 px-2 uppercase text-sm font-medium flex">
      <li className="mr-4">
        <NavLink to="/" className={setActiveClass}>
          Главное
        </NavLink>
      </li>
      <li className="mr-4">
        <NavLink to="/menu" className={setActiveClass}>
          Меню
        </NavLink>
      </li>
      <li className="mr-4">
        <NavLink to="/events" className={setActiveClass}>
          Акций
        </NavLink>
      </li>
      <li className="mr-4">
        <NavLink to="/booking" className={setActiveClass}>
          Бронирование
        </NavLink>
      </li>
      <li className="mr-4">
        <NavLink to="/location" className={setActiveClass}>
          Локация
        </NavLink>
      </li>
    </ul>
  );
}

export default SiteNav;
