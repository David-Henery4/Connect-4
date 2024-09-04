import ScoreCard from "./score-card/ScoreCard";
import { PlayerOneIcon, PlayerTwoIcon } from "../../../../public/assets/images";

const Scores = () => {
  return (
    <>
      <ScoreCard className="grid grid-cols-scoreCardMobileLeftToRight">
        <div className="pt-[10px] pb-[22px] z-10 col-start-2 col-end-4 row-start-1 row-end-2">
          <PlayerOneIcon />
        </div>
        <div className="bg-white rounded-[20px] border-[3px] border-b-[12px] border-black col-start-1 col-end-3 row-start-1 row-end-2 grid place-items-center py-[10px]">
          <h3>Player 1</h3>
          <p>0</p>
        </div>
      </ScoreCard>
      <ScoreCard className="grid grid-cols-scoreCardMobileLeftToRight">
        <div className="pt-[10px] pb-[22px] z-10 col-start-2 col-end-4 row-start-1 row-end-2">
          <PlayerTwoIcon />
        </div>
        <div className="bg-white rounded-[20px] border-[3px] border-b-[12px] border-black col-start-1 col-end-3 row-start-1 row-end-2 grid place-items-center py-[10px]">
          <h3>Player 2</h3>
          <p>0</p>
        </div>
      </ScoreCard>
    </>
  );
};

export default Scores;
