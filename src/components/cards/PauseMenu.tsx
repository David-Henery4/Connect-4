import { forwardRef } from "react";
import { Heading } from "../reusable/text";
import Button from "../reusable/Button";
import useGlobalHook from "@/context/useGlobalHook";

const PauseMenu = forwardRef<HTMLDialogElement, {pauseClose: () => void}>((props, ref) => {
  const { handleQuit } = useGlobalHook();
  //
  return (
    <dialog ref={ref} className="w-full bg-black/0 backdrop:bg-black/50">
      <div className="w-full max-w-[480px] mx-auto px-5 py-[30px] text-center text-white bg-secondary rounded-[40px] border-[3px] border-b-[12px] border-black mediumTablet:px-10 mediumTablet:py-[50px]">
        <Heading variant="large" className="uppercase">
          Pause
        </Heading>
        <div className="flex flex-col gap-4 font-extrabold mt-8">
          <Button
            variant="secondary"
            className="w-full justify-center uppercase"
            onClick={props.pauseClose}
          >
            Resume
          </Button>
          <Button
            variant="secondary"
            className="w-full justify-center uppercase"
          >
            Restart
          </Button>
          <Button variant="third" className="w-full justify-center uppercase" onClick={handleQuit}>
            Quit
          </Button>
        </div>
      </div>
    </dialog>
  );
});

PauseMenu.displayName = "PauseMenu";
export default PauseMenu;
