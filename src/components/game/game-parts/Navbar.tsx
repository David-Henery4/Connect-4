import Navbtn from "./nav-btn/Navbtn";
import { LogoIcon } from "../../../../public/assets/images";

const Navbar = () => {
  return (
    <nav className="w-full grid gap-y-6 col-start-1 col-end-3 mobile:grid-cols-navbar mobile:items-center">
      <Navbtn btnType="menu" />
      <div className="row-start-1 row-end-2 flex justify-center items-center  mobile:row-auto">
        <LogoIcon />
      </div>
      <Navbtn btnType="restart" />
    </nav>
  );
};

export default Navbar;
