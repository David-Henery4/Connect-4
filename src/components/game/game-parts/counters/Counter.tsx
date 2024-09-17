import {
  CounterRedLargeIcon,
  CounterRedSmallIcon,
  CounterYellowSmallIcon,
  CounterYellowLargeIcon,
} from "../../../../../public/assets/images";
import { useEffect, useState } from "react";


const Counter = ({
  counterOwner,
  index,
}: {
  column: string;
  counterOwner: number;
  rowValue: number;
  index: number;
}) => {
  const [translateY, setTranslateY] = useState(
    `translateY(${600 - index * 100}%)`
  );
  const [opacity, setOpacity] = useState(0.9)
  const [scale, setScale] = useState(0.9)
  //
  useEffect(() => {
    //
    const timeout = setTimeout(() => {
      setTranslateY("translateY(0px)");
      setOpacity(1)
      setScale(1)
    }, 50);
    //
    return () => clearTimeout(timeout);
  }, [index])
  //
  return (
    <div
      className={`w-full h-full relative transition-all duration-1000 animate-[ease-in-out]`}
      style={{ transform: translateY, opacity: opacity, scale: scale }}
    >
      {counterOwner === 1 ? (
        <>
          <CounterRedLargeIcon className="w-full h-full rotate-180 hidden tablet:block" />
          <CounterRedSmallIcon className="w-full h-full rotate-180 tablet:hidden" />
        </>
      ) : (
        <>
          <CounterYellowLargeIcon className="w-full h-full rotate-180 hidden tablet:block" />
          <CounterYellowSmallIcon className="w-full h-full rotate-180 tablet:hidden" />
        </>
      )}
    </div>
  );
};

export default Counter;
