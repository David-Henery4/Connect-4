import {
  BoardLayerBlackLargeIcon,
  BoardLayerBlackSmallIcon,
  BoardLayerWhiteLargeIcon,
  BoardLayerWhiteSmallIcon,
} from "../../../../public/assets/images";
import Timer from "./timer/Timer";
import * as counterData from "@/local-data/counterData";
import Counter from "./counters/Counter";

const GameGrid = () => {
  return (
    <section className="w-full max-w-[632px] mx-auto col-start-1 col-end-3 flex flex-col items-center justify-center desktop:col-start-3 desktop:col-end-4 desktop:row-start-2 desktop:row-end-4">
      <div
        className="relative w-full"
        onClick={() => console.log("clicked: beyond container")}
      >
        <div
          className="w-full h-full absolute top-0 left-0 grid grid-cols-mainGameCounterGrid grid-rows-mainGameCounterGrid gap-4 z-10 pt-4 px-4 pb-[67px]"
          onClick={() => console.log("clicked: container")}
        >
          {counterData.colA.map((counter) => {
            return <Counter key={counter.id} />;
          })}
          {counterData.colB.map((counter) => {
            return <Counter key={counter.id} />;
          })}
          {counterData.colC.map((counter) => {
            return <Counter key={counter.id} />;
          })}
          {counterData.colD.map((counter) => {
            return <Counter key={counter.id} />;
          })}
          {counterData.colE.map((counter) => {
            return <Counter key={counter.id} />;
          })}
          {counterData.colF.map((counter) => {
            return <Counter key={counter.id} />;
          })}
          {counterData.colG.map((counter) => {
            return <Counter key={counter.id} />;
          })}
        </div>
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
