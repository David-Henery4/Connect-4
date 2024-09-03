import { Heading, BaseText } from "@/components/reusable/text";

const Objective = () => {
  return (
    <div className="w-full mt-7">
      <Heading variant="small" className="text-secondary">
        OBJECTIVE
      </Heading>
      <BaseText className="mt-4">
        Be the first player to connect 4 of the same colored discs in a row
        (either vertically, horizontally, or diagonally).
      </BaseText>
    </div>
  );
};

export default Objective;
