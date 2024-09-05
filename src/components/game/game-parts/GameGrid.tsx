import {
  BoardLayerBlackLargeIcon,
  BoardLayerBlackSmallIcon,
  BoardLayerWhiteLargeIcon,
  BoardLayerWhiteSmallIcon,
} from "../../../../public/assets/images";
import Timer from "./timer/Timer";

const GameGrid = () => {
  return (
    <section className="w-full col-start-1 col-end-3 flex flex-col items-center justify-center">
      <div className="relative w-full">
        <div className="absolute top-0 left-0 w-full h-full">
          <BoardLayerBlackSmallIcon className="w-full h-full" />
        </div>
        <div className="w-full relative z-10">
          <BoardLayerWhiteSmallIcon className="w-full h-full" />
        </div>
      </div>
      <Timer />
    </section>
  );
};

export default GameGrid;
