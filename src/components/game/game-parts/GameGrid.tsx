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
import { useEffect, useState } from "react";
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

interface ColumnRowTypes {
  column: string;
  counterOwner: number;
  rowValue: number;
  columnValue: number;
}

const GameGrid = () => {
  // const [counterOwnerId, setCounterOwnerId] = useState<number | null>(null);
  const {
    currentPlayer,
    handleTurn,
    handleColumnClick,
    gameColumns,
    hasRoundStarted,
  } = useGlobalHook();

  //
  const isConsecutive = (values: number[]): boolean => {
    if (values.length < 4) return false;
    values.sort((a, b) => a - b);
    //
    let count = 1;
    //
    for (let index = 1; index < values.length; index++) {
      //
      if (values[index] === values[index - 1] + 1) {
        count++;
        if (count === 4) return true;
      } else {
        count = 1;
      }
    }
    //
    return false;
  };
  //
  const handleCheckWin = () => {
    let allPlacedCounters: ColumnRowTypes[] = [];
    //
    let playerOneCounters: ColumnRowTypes[] = [];
    let playerTwoCounters: ColumnRowTypes[] = [];
    //
    gameColumns.map((col) => {
      allPlacedCounters.push(...col.columnRows);
    });

    allPlacedCounters.map((counterValue) => {
      counterValue?.counterOwner === 1
        ? playerOneCounters.push(counterValue)
        : playerTwoCounters.push(counterValue);
    });

    /////////////////////////////////////////////////////

    // Group by rowValue for horizontal checks
    const rowsMap = new Map<number, number[]>();
    playerOneCounters.forEach(({ rowValue, columnValue }) => {
      if (!rowsMap.has(rowValue)) {
        rowsMap.set(rowValue, []);
      }
      rowsMap.get(rowValue)!.push(columnValue);
    });

    // Check horizontal win
    for (const columns of rowsMap.values()) {
      if (isConsecutive(columns)) return true;
    }

    // Group by columnValue for vertical checks
    const columnsMap = new Map<number, number[]>();
    playerOneCounters.forEach(({ rowValue, columnValue }) => {
      if (!columnsMap.has(columnValue)) {
        columnsMap.set(columnValue, []);
      }
      columnsMap.get(columnValue)!.push(rowValue);
    });

    // Check vertical win
    for (const rows of columnsMap.values()) {
      if (isConsecutive(rows)) return true;
    }

    ////////////////////////
    // Check diagonals
    const diagonals1 = new Map<number, number[]>(); // bottom-left to top-right
    const diagonals2 = new Map<number, number[]>(); // bottom-right to top-left

    playerOneCounters.forEach(({ rowValue, columnValue }) => {
      const diag1Key = rowValue - columnValue;
      const diag2Key = rowValue + columnValue;

      if (!diagonals1.has(diag1Key)) {
        diagonals1.set(diag1Key, []);
      }
      diagonals1.get(diag1Key)!.push(rowValue);

      if (!diagonals2.has(diag2Key)) {
        diagonals2.set(diag2Key, []);
      }
      diagonals2.get(diag2Key)!.push(rowValue);
    });

    // Check diagonal wins
    for (const diagonal of diagonals1.values()) {
      if (isConsecutive(diagonal)) return true;
    }
    for (const diagonal of diagonals2.values()) {
      if (isConsecutive(diagonal)) return true;
    }

    return false;
  };
  //
  useEffect(() => {
    const result = handleCheckWin();
    console.log(result);
  }, [gameColumns]);
  //
  return (
    <section
      className="w-full max-w-[632px] mx-auto col-start-1 col-end-3 flex flex-col items-center justify-center desktop:col-start-3 desktop:col-end-4 desktop:row-start-2 desktop:row-end-4"
      // onClick={() => {
      //   const result = handleCheckWin()
      //   // console.log(result)
      // }}
    >
      <div className="relative w-full">
        {/****/}
        <div className="w-full h-full absolute top-0 left-0 z-10 pt-[2%] px-[2.7%] pb-[8.5%] grid grid-cols-mainGameCounterGrid gap-4">
          {gameColumns.map((col) => {
            return (
              <div
                key={col.columnLetter}
                className="relative group grid grid-rows-mainGameCounterGrid rotate-180 hover:cursor-pointer"
                onClick={() => {
                  if (!hasRoundStarted) return;
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
