import ScoreCard from "./score-card/ScoreCard";
import { PlayerOneIcon, PlayerTwoIcon } from "../../../../public/assets/images";
import { Heading } from "@/components/reusable/text";

const Scores = () => {
  return (
    <>
      <ScoreCard className="w-full flex flex-col mobile:flex-row">
        <div className="mb-[-30px] flex justify-center items-center z-10 mobile:mb-0 mobile:mr-[-27px]">
          <PlayerOneIcon />
        </div>
        <div className="flex-1 bg-white rounded-[20px] border-[3px] border-b-[12px] border-black px-6 pt-[46px] pb-[18px] text-center mobile:py-3">
          <Heading variant="xsmall" className="uppercase">
            Player 1
          </Heading>
          <p className="text-[32px] font-bold">0</p>
        </div>
      </ScoreCard>
      <ScoreCard className="w-full flex flex-col mobile:flex-row-reverse">
        <div className="mb-[-30px] flex justify-center items-center z-10 mobile:mb-0 mobile:ml-[-27px]">
          <PlayerTwoIcon />
        </div>
        <div className="flex-1 bg-white rounded-[20px] border-[3px] border-b-[12px] border-black px-7 pt-[46px] pb-[18px] text-center mobile:py-3">
          <Heading variant="xsmall" className="uppercase">
            Player 2
          </Heading>
          <p className="text-[32px] font-bold">0</p>
        </div>
      </ScoreCard>
    </>
  );
};

export default Scores;
