import { BadgeCheckIcon, LogoutIcon } from "@heroicons/react/outline";
import { useRef } from "react";
import useAuth from "../../../../hooks/useAuth";
import useOutsideAlerter from "../../../../hooks/useClickOutside";

function UserPanel() {
  const auth = useAuth();
  const wrapperRef = useRef(null);
  useOutsideAlerter(wrapperRef);

  const onLogOut = () => {
    auth.logOut();
  };

  return (
    <div
      ref={wrapperRef}
      className="user-panel z-40 bg-white px-4 pt-4 pb-2 flex flex-col items-center animate-fade rounded-lg shadow-lg shadow-gray-300 absolute top-12 right-0"
    >
      <ul className="uppercase text-[11px] text-title">
        <li className="flex items-center odd:mb-5">
          <BadgeCheckIcon className="w-5 mr-2" />
          <a href="#" className="hover:text-green-600 font-semibold">
            Мои заказы
          </a>
        </li>

        <li className="flex items-center">
          <LogoutIcon className="w-5 mr-2" />
          <button
            onClick={onLogOut}
            className="hover:text-green-600 font-semibold"
          >
            Выйти
          </button>
        </li>
      </ul>
    </div>
  );
}

export default UserPanel;
