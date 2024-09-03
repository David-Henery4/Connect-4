import { Heading, BaseText } from "@/components/reusable/text";

const HowToPlayList = () => {
  return (
    <div className="w-full mt-8">
      <Heading variant="small" className="text-secondary">
        HOW TO PLAY
      </Heading>
      <ol className="mt-4 list-decimal list-inside space-y-3">
        <li>
          <BaseText className="inline">
            Red goes first in the first game.
          </BaseText>
        </li>
        <li>
          <BaseText className="inline">
            Players must alternate turns, and only one disc can be dropped per
            turn.
          </BaseText>
        </li>
        <li>
          <BaseText className="inline">
            The game is over when there is a 4-in-a-row or a stalemate.
          </BaseText>
        </li>
        <li>
          <BaseText className="inline">
            The starter of the previous game goes second on the next game.
          </BaseText>
        </li>
      </ol>
    </div>
  );
};

export default HowToPlayList;
