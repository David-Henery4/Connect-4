import {
  CounterRedLargeIcon,
  CounterRedSmallIcon,
  CounterYellowLargeIcon,
} from "../../../../../public/assets/images";
import { useState } from "react";
import useGlobalHook from "@/context/useGlobalHook";

const Counter = ({ counterCol }: {counterCol: string}) => {
  const { currentPlayer } = useGlobalHook();
  const [isClicked, setIsClicked] = useState(false);
  const [counterOwnerId, setCounterOwnerId] = useState<number | null>(null);
  //
  return (
    <div
      className="w-full h-full relative"
      onClick={() => {
        if (!isClicked) {
          setCounterOwnerId(currentPlayer.playerId);
        }
        setIsClicked(true);
        console.log("counter row: ", counterCol);
      }}
    >
      {isClicked && (
        <>
          {counterOwnerId === 1 ? (
            <CounterRedLargeIcon className="w-full h-full" />
          ) : (
            <CounterYellowLargeIcon className="w-full h-full" />
          )}
        </>
      )}
    </div>
  );
};

export default Counter;
