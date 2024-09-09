import {CounterRedLargeIcon, CounterRedSmallIcon} from "../../../../../public/assets/images"
import { useState } from "react"
import useGlobalHook from "@/context/useGlobalHook"

const Counter = () => {
  const {currentPlayer} = useGlobalHook()
  const [isClicked, setIsClicked] = useState(false)
  //
  return (
    <div className="w-full h-full relative" onClick={() => {
      setIsClicked(true)
      console.log("clicked: counter");
      }}>
      {isClicked && (
        <>
        {currentPlayer.playerId === 1 ? <CounterRedLargeIcon /> : <CounterRedSmallIcon />}
        </>
        )}
    </div>
  )
}

export default Counter