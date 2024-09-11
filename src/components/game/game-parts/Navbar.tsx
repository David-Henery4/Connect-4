import Navbtn from "./nav-btn/Navbtn";
import { LogoIcon } from "../../../../public/assets/images";
import useGlobalHook from "@/context/useGlobalHook";
import { PauseMenu } from "@/components/cards";
import { useRef } from "react";

const Navbar = () => {
  const dialogRef = useRef<HTMLDialogElement>(null);
  const { setGamePaused, handleGameRestart } = useGlobalHook();

  const handlePauseMenuOpen = () => {
    dialogRef.current?.showModal();
    setGamePaused(true);
  }

  const handlePauseMenuClose = () => {
    dialogRef.current?.close();
    setGamePaused(false);
  }

  return (
    <nav className="w-full max-w-[632px] mx-auto grid gap-y-6 col-start-1 col-end-3 mobile:grid-cols-navbar mobile:items-center desktop:col-start-3 desktop:col-end-4 ">
      <PauseMenu ref={dialogRef} pauseClose={handlePauseMenuClose} />
      <Navbtn btnType="menu" onClick={handlePauseMenuOpen} />
      <div className="row-start-1 row-end-2 flex justify-center items-center  mobile:row-auto">
        <LogoIcon />
      </div>
      <Navbtn btnType="restart" onClick={handleGameRestart} />
    </nav>
  );
};

export default Navbar;
