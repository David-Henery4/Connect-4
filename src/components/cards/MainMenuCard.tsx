import { LogoIcon } from "../../../public/assets/images";
import MainMenuBtns from "./main-menu-parts/MainMenuBtns";

const MainMenuCard = () => {
  return (
    <div className="w-full max-w-[480px] mx-auto flex flex-col justify-center items-center gap-20 smTablet:bg-secondary smTablet:py-[70px] smTablet:px-10 smTablet:rounded-[40px]">
      <LogoIcon />
      <MainMenuBtns />
    </div>
  );
}

export default MainMenuCard