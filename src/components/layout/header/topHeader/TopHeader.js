import useAuth from "../../../../hooks/useAuth";
import UserPanel from "./UserPanel";
import LoginBtn from "./LoginBtn";
import { LocationMarkerIcon } from "@heroicons/react/outline";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import AuthForms from "./AuthForms";
import { changeDropdownState } from "../../../componentsSlice";

function TopHeader() {
  const auth = useAuth();
  const { dropdownIsHidden } = useSelector((state) => state.component);
  const dispatch = useDispatch();

  const togglerAuthForms = () => {
    dispatch(changeDropdownState(!dropdownIsHidden));
  };

  return (
    <div className="site-nav py-4">
      <div className="max-w-6xl mx-auto flex items-center justify-between px-2">
        <div className="left-block flex items-center">
          <Link to="/" className="logo font-extrabold mr-6">
            <h1 className="text-3xl leading-none tracking-tight ">
              Restaurant
            </h1>
            <span className="uppercase tracking-widest">fantasy</span>
          </Link>
          <button className="btn-primary flex items-center mr-4 py-1.5 px-4 rounded-3xl">
            <LocationMarkerIcon className="w-6" />
            <span>Нукус</span>
          </button>
        </div>

        <div className="right-block flex items-center relative">
          <div className="languages">
            <button className="uppercase py-1.5 px-2">uz</button>
            <button className="uppercase bg-green-600 text-white py-1.5 px-2 rounded-full">
              ру
            </button>
          </div>
          {auth.user ? (
            <button onClick={togglerAuthForms}>
              <LoginBtn text={auth.user.name} />
            </button>
          ) : (
            <button onClick={togglerAuthForms}>
              <LoginBtn text={"Вход"} />
            </button>
          )}
          {(!dropdownIsHidden && auth.user && <UserPanel />) ||
            (!dropdownIsHidden && <AuthForms />)}
        </div>
      </div>
    </div>
  );
}

export default TopHeader;
