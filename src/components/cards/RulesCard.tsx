import { Heading } from "@/components/reusable/text";
import { IconCheckIcon } from "../../../public/assets/images";
import { Objective, HowToPlayList } from "./rules-parts";
import Link from "next/link";

const RulesCard = () => {
  return (
    <section
      className="relative w-full max-w-[480px] mx-auto rounded-[40px] bg-white px-5 pt-[30px] pb-[60px] border-[3px] border-b-[12px] border-black smTablet:px-[34px] backdrop:bg-secondary"
    >
      {/* <div className="relative w-full max-w-[480px] mx-auto rounded-[40px] bg-white px-5 pt-[30px] pb-[60px] border-[3px] border-b-[12px] border-black smTablet:px-[34px]">
        </div> */}
      <Heading variant="large" className="text-center">
        RULES
      </Heading>

      <Objective />

      <HowToPlayList />

      <Link href="/" className="absolute -bottom-[37.5px] right-1/2 translate-x-1/2 hover:cursor-pointer">
        <span className="sr-only">close</span>
          <IconCheckIcon />
      </Link>
    </section>
  );
};

export default RulesCard;
