import { cn } from "@/libs/utils"
import { HTMLAttributes } from "react"

interface ScoreCardProps extends HTMLAttributes<HTMLDivElement> {
  className: string;
}

const ScoreCard = ({ children ,className,  ...props }: ScoreCardProps) => {

  return (
    <div className={cn("", className)} {...props}>
      {children}
    </div>
  );
}


export default ScoreCard