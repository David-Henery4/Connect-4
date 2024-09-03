import Button from "@/components/reusable/Button";
import { Heading } from "@/components/reusable/text";
import { PlayerVsPlayerIcon } from "../../../../public/assets/images";
import Link from "next/link";

const MainMenuBtns = () => {
  return (
    <div className="flex flex-col gap-4 w-full">
      <Button variant="primary">
        <Heading variant="medium" className="flex-1">
          PLAY VS PLAYER
        </Heading>
        <PlayerVsPlayerIcon />
      </Button>
      <Link href="/rules">
        <Button variant="secondary">
          <Heading variant="medium" className="flex-1">
            GAME RULES
          </Heading>
        </Button>
      </Link>
    </div>
  );
};

export default MainMenuBtns;
