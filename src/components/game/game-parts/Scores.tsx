import ScoreCard from "./score-card/ScoreCard";
import { PlayerOneIcon, PlayerTwoIcon } from "../../../../public/assets/images";
import { Heading } from "@/components/reusable/text";
import useGlobalHook from "@/context/useGlobalHook";

const Scores = () => {
  const { playerInfo } = useGlobalHook();
  return (
    <>
      <ScoreCard className="w-full flex flex-col mobile:flex-row desktop:col-start-1 desktop:col-end-2 desktop:row-start-2 desktop:row-end-4 desktop:self-center desktop:flex-col desktop:mb-[150px]">
        <div className="mb-[-30px] flex justify-center items-center z-10 mobile:mb-0 mobile:mr-[-27px] desktop:mb-[-30px] desktop:mr-0">
          <PlayerOneIcon />
        </div>
        <div className="flex-1 bg-white rounded-[20px] border-[3px] border-b-[12px] border-black px-4 pt-[46px] pb-[18px] text-center mobile:py-3 smTablet:flex smTablet:justify-between smTablet:items-center smTablet:pl-11 desktop:px-4 desktop:pt-[46px] desktop:pb-[18px] desktop:block">
          <Heading variant="xsmall" className="uppercase">
            Player 1
          </Heading>
          <p className="text-[32px] font-bold">{playerInfo.player1.score}</p>
        </div>
      </ScoreCard>
      <ScoreCard className="w-full flex flex-col mobile:flex-row-reverse desktop:col-start-5 desktop:col-end-6 desktop:row-start-2 desktop:row-end-4 desktop:self-center desktop:flex-col desktop:mb-[150px]">
        <div className="mb-[-30px] flex justify-center items-center z-10 mobile:mb-0 mobile:ml-[-27px] desktop:mb-[-30px] desktop:ml-0">
          <PlayerTwoIcon />
        </div>
        <div className="flex-1 bg-white rounded-[20px] border-[3px] border-b-[12px] border-black px-4 pt-[46px] pb-[18px] text-center mobile:py-3 smTablet:flex smTablet:justify-between smTablet:items-center smTablet:pr-11 smTablet:flex-row-reverse desktop:px-4 desktop:pt-[46px] desktop:pb-[18px] desktop:block">
          <Heading variant="xsmall" className="uppercase">
            Player 2
          </Heading>
          <p className="text-[32px] font-bold">{playerInfo.player2.score}</p>
        </div>
      </ScoreCard>
    </>
  );
};

export default Scores;
