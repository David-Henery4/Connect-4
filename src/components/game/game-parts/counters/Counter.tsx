import {
  CounterRedLargeIcon,
  CounterRedSmallIcon,
  CounterYellowLargeIcon,
} from "../../../../../public/assets/images";
import { useState } from "react";
import useGlobalHook from "@/context/useGlobalHook";

const Counter = ({
  column,
  counterOwner,
  rowValue,
}: {
  column: string;
  counterOwner: number;
  rowValue: number;
}) => {
  // const { currentPlayer } = useGlobalHook();
  // const [counterOwnerId, setCounterOwnerId] = useState<number | null>(null);
  // const [isClicked, setIsClicked] = useState(false);

  //
  return (
    <div className="w-full h-full relative">
      {counterOwner === 1 ? (
        <CounterRedLargeIcon className="w-full h-full" />
      ) : (
        <CounterYellowLargeIcon className="w-full h-full" />
      )}
    </div>
  );
};

export default Counter;
