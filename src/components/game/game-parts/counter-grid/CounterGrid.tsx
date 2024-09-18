import {
  MarkerRedIcon,
  MarkerYellowIcon,
} from "../../../../../public/assets/images";
import useGlobalHook from "@/context/useGlobalHook";
import Counter from "../counters/Counter";
import useWithSound from "@/hook/useWithSound";
import popSound from "/public/assets/sounds/pop.mp3"
// import popSound from "../../../../../public/assets/sounds/pop.mp3"

const CounterGrid = () => {
  const {handlePlaySound} = useWithSound(popSound)
  const { 
    gameColumns, 
    handleColumnClick, 
    hasRoundStarted, 
    currentPlayer,
    } = useGlobalHook();
  //
  return (
    <div className="w-full h-full absolute top-0 left-0 z-10 pt-[2%] px-[2%] pb-[9.5%] grid grid-cols-mainGameCounterGrid gap-2 tablet:gap-4 tablet:pb-[8.5%] tablet:px-[2.7%]">
      {gameColumns.map((col) => {
        return (
          <div
            key={col.columnLetter}
            className="relative group grid grid-rows-mainGameCounterGrid rotate-180 hover:cursor-pointer"
            onClick={() => {
              if (!hasRoundStarted) return;
              if (col.columnRows.length >= 6) return;
              handleColumnClick(col.columnLetter);
              handlePlaySound()
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
              return <Counter key={i} {...rowItem} index={i} />;
            })}
          </div>
        );
      })}
    </div>
  );
};

export default CounterGrid;
