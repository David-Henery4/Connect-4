import {MarkerRedIcon, MarkerRedBgIcon, TurnBackgroundRedIcon} from "../../../../../public/assets/images"
import { Heading } from "@/components/reusable/text";

const Timer = () => {
  return (
    <div className="z-10 mt-[-27px] relative w-[40vw] max-w-[191px] max-h-[150px] text-white">
      {/* <MarkerRedIcon className="" /> */}
      <MarkerRedBgIcon className="w-full" />
      <div className="absolute w-full h-full top-0 left-0 text-center pt-[25%] pb-[15%] flex flex-col justify-between gap-2">
        <Heading
          variant="xsmall"
          className="leading-none text-scoreSmallHeading"
        >
          PLAYER 1’S TURN
        </Heading>
        <Heading
          variant="large"
          className="leading-none text-scoreLargeHeading"
        >
          15s
        </Heading>
      </div>
    </div>
  );
}

export default Timer