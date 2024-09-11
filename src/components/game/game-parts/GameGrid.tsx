import {
  BoardLayerBlackLargeIcon,
  BoardLayerBlackSmallIcon,
  BoardLayerWhiteLargeIcon,
  BoardLayerWhiteSmallIcon,
} from "../../../../public/assets/images";
import Timer from "./timer/Timer";
import * as counterData from "@/local-data/counterData";
import Counter from "./counters/Counter";
// import * as columnData from "@/local-data/columnData";
import { useState } from "react";
import columns from "@/local-data/columnData";

const GameGrid = () => {
  const [gameColumns, setGameColumns] = useState(columns);
  //
  const gridColumns = [...Object.values(counterData)];
  //
  const handleColumnClick = (columnLetter: string) => {
    console.log(columnLetter)
  };
  //
  return (
    <section className="w-full max-w-[632px] mx-auto col-start-1 col-end-3 flex flex-col items-center justify-center desktop:col-start-3 desktop:col-end-4 desktop:row-start-2 desktop:row-end-4">
      <div className="relative w-full">
        {/****/}
        <div className="w-full h-full absolute top-0 left-0 z-10 pt-[2%] px-[2.7%] pb-[8.5%] grid grid-cols-mainGameCounterGrid gap-4">
          {gameColumns.map((col) => {
            return (
              <div
                key={col.columnLetter}
                className="flex flex-col justify-end items-center"
                onClick={() => {
                  handleColumnClick(col.columnLetter)
                }}
              >
                {col.columnRows?.map((rowItem, i) => {
                  console.log(rowItem);
                  if (rowItem !== undefined) {
                    return <Counter key={i} counterCol={rowItem} />;
                  }
                  return null;
                })}
              </div>
            );
          })}
        </div>
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

{
  /* <div className="w-full h-full absolute top-0 left-0 grid grid-cols-mainGameCounterGrid grid-rows-mainGameCounterGrid grid-flow-col gap-x-4 z-10 pt-[2%] px-[2.7%] pb-[8.5%]">
  {counterData.colA.map((counter) => {
    return <Counter key={counter.id} counterCol={counter.col} />;
  })}
  {counterData.colB.map((counter) => {
    return <Counter key={counter.id} counterCol={counter.col} />;
  })}
  {counterData.colC.map((counter) => {
    return <Counter key={counter.id} counterCol={counter.col} />;
  })}
  {counterData.colD.map((counter) => {
    return <Counter key={counter.id} counterCol={counter.col} />;
  })}
  {counterData.colE.map((counter) => {
    return <Counter key={counter.id} counterCol={counter.col} />;
  })}
  {counterData.colF.map((counter) => {
    return <Counter key={counter.id} counterCol={counter.col} />;
  })}
  {counterData.colG.map((counter) => {
    return <Counter key={counter.id} counterCol={counter.col} />;
  })}
</div>; */
}
