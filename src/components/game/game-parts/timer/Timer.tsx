import confetti from "canvas-confetti";
import {
  MarkerRedBgIcon,
  MarkerYellowBgIcon,
} from "../../../../../public/assets/images";
import { Heading } from "@/components/reusable/text";
import useGlobalHook from "@/context/useGlobalHook";
import Navbtn from "../nav-btn/Navbtn";
import { useEffect, useState } from "react";
import useWithSound from "@/hook/useWithSound";

interface ConfettiOptions {
  spread: number;
  startVelocity?: number;
  decay?: number;
  scalar?: number;
}

const Timer = () => {
  const { handlePlaySound } = useWithSound("/assets/sounds/success.mp3");
  const [count, setCount] = useState(600)
  const [defaults, setDefaults] = useState({
    origin: {
      y: 0.7,
    },
  });
  //
  const {
    gameTimer,
    currentPlayer,
    hasRoundStarted,
    roundWinner,
    handlePlayAgain,
  } = useGlobalHook();
  //
  const handleConfetti = (particleRatio: number, opts: ConfettiOptions) => {
    confetti({
      ...defaults,
      ...opts,
      particleCount: Math.floor(count * particleRatio),
    });
  };
  //
  useEffect(() => {
    if (!hasRoundStarted && roundWinner) {
      handlePlaySound()
      handleConfetti(0.25, {
        spread: 26,
        startVelocity: 55,
      });
      handleConfetti(0.2, {
        spread: 60,
      });
      handleConfetti(0.35, {
        spread: 100,
        decay: 0.91,
        scalar: 0.8,
      });
      handleConfetti(0.1, {
        spread: 120,
        startVelocity: 25,
        decay: 0.92,
        scalar: 1.2,
      });
      handleConfetti(0.1, {
        spread: 120,
        startVelocity: 45,
      });
    }
  }, [hasRoundStarted, roundWinner]);
  //
  return (
    <>
      {!hasRoundStarted && roundWinner ? (
        <>
          
          <div className="z-10 p-5 flex flex-col justify-center items-center mt-[-27px] relative w-[60vw] max-w-[285px] bg-white text-black rounded-[20px] border-[3px] border-b-[12px] border-black">
            <Heading
              variant="xsmall"
              className="leading-none text-scoreSmallHeading"
            >
              {roundWinner.playerId === 1 ? "PLAYER 1" : "PLAYER 2"}
            </Heading>
            <Heading
              variant="large"
              className="leading-none text-scoreLargeHeading mt-2 mb-3"
            >
              WINS
            </Heading>
            <Navbtn btnType="play again" onClick={handlePlayAgain} />
          </div>
        </>
      ) : (
        <div className="z-10 mt-[-27px] relative w-[40vw] max-w-[191px] max-h-[150px] text-white">
          {currentPlayer.playerId === 1 ? (
            <MarkerRedBgIcon className="w-full" />
          ) : (
            <MarkerYellowBgIcon className="w-full" />
          )}
          <div className="absolute w-full h-full top-0 left-0 text-center pt-[25%] pb-[15%] flex flex-col justify-between gap-2">
            <Heading
              variant="xsmall"
              className="leading-none text-scoreSmallHeading"
            >
              {currentPlayer.playerId === 1
                ? "PLAYER 1’S TURN"
                : "PLAYER 2’S TURN"}
            </Heading>
            <Heading
              variant="large"
              className="leading-none text-scoreLargeHeading"
            >
              {gameTimer}s
            </Heading>
          </div>
        </div>
      )}
    </>
  );
};

export default Timer;
