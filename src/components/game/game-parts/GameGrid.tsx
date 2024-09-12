import {
  BoardLayerBlackLargeIcon,
  BoardLayerBlackSmallIcon,
  BoardLayerWhiteLargeIcon,
  BoardLayerWhiteSmallIcon,
  MarkerYellowBgIcon,
  MarkerRedBgIcon,
  MarkerRedIcon,
  MarkerYellowIcon,
} from "../../../../public/assets/images";
import Timer from "./timer/Timer";
import * as counterData from "@/local-data/counterData";
import Counter from "./counters/Counter";
// import * as columnData from "@/local-data/columnData";
import { useState } from "react";
import columns from "@/local-data/columnData";
import useGlobalHook from "@/context/useGlobalHook";

interface ColumnsTypes {
  columnLetter: string;
  columnRows: {
    column: string;
    counterOwner: number;
    rowValue: number;
  }[];
}

const GameGrid = () => {
  // const [counterOwnerId, setCounterOwnerId] = useState<number | null>(null);
  const { currentPlayer, handleTurn } = useGlobalHook();
  const [gameColumns, setGameColumns] = useState<ColumnsTypes[]>(columns);
  //
  const handleColumnClick = (columnLetter: string) => {
    setGameColumns((previousValues) => {
      const newColumns = previousValues.map((col) => {
        if (col.columnLetter === columnLetter) {
          return {
            ...col,
            columnRows: [
              ...col.columnRows,
              {
                column: columnLetter,
                counterOwner: currentPlayer.playerId,
                rowValue: col.columnRows.length + 1,
              },
            ],
          };
        }
        return col;
      });
      return newColumns;
    });
    handleTurn()
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
                className="relative group grid grid-rows-mainGameCounterGrid rotate-180 hover:cursor-pointer"
                onClick={() => {
                  if (col.columnRows.length >= 6) return;
                  handleColumnClick(col.columnLetter);
                }}
              >
                <div className="absolute -bottom-12 left-1/2 rotate-180 -translate-x-1/2 w-[38px] h-9 z-50 hidden group-hover:block">
                  {currentPlayer.playerId === 1 ? (
                    <MarkerRedIcon className="w-full h-full" />
                  ) : (
                    <MarkerYellowIcon className="w-full h-full" />
                  )}
                </div>
                {col.columnRows?.map((rowItem, i) => {
                  return <Counter key={i} {...rowItem} />;
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

