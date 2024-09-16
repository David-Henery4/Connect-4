import {
  BoardLayerBlackLargeIcon,
  BoardLayerBlackSmallIcon,
  BoardLayerWhiteLargeIcon,
  BoardLayerWhiteSmallIcon,
} from "../../../../public/assets/images";
import Timer from "./timer/Timer";
import CounterGrid from "./counter-grid/CounterGrid";

const GameGrid = () => {
  //
  return (
    <section className="w-full max-w-[632px] mx-auto col-start-1 col-end-3 flex flex-col items-center justify-center desktop:col-start-3 desktop:col-end-4 desktop:row-start-2 desktop:row-end-4">
      <div className="relative w-full">
        {/****/}
        <CounterGrid />
        {/****/}
        <div className="absolute top-0 left-0 w-full h-full">
          <BoardLayerBlackSmallIcon className="w-full h-full tablet:hidden" />
          <BoardLayerBlackLargeIcon className="w-full h-full hidden tablet:block" />
        </div>
        <div
          className="w-full relative z-10 pointer-events-none"
          onClick={() => console.log("clicked: grid")}
        >
          <BoardLayerWhiteSmallIcon className="w-full h-full tablet:hidden" />
          <BoardLayerWhiteLargeIcon className="w-full h-full hidden tablet:block" />
        </div>
      </div>
      <Timer />
    </section>
  );
};

export default GameGrid;
