import { cn } from "@/libs/utils";
import { HTMLAttributes } from "react";
import { cva } from "class-variance-authority";

interface HeadingProps extends HTMLAttributes<HTMLHeadingElement> {
  variant: "large" | "medium" | "small" | "xsmall";
}

const Heading = ({ children, className, variant, ...props }: HeadingProps) => {
  if (variant === "large") {
    return (
      <h1 className={cn(headingVariants({ variant }), className)} {...props}/>
    );
  }

  if (variant === "medium") {
    return (
      <h2 className={cn(headingVariants({ variant }), className)} {...props}/>
    );
  }

  if (variant === "small") {
    return (
      <h3 className={cn(headingVariants({ variant }), className)} {...props}/>
    );
  }

  if (variant === "xsmall") {
    return (
      <h4 className={cn(headingVariants({ variant }), className)} {...props}/>
    );
  }

  return null;
};

const headingVariants = cva("font-bold", {
  variants: {
    variant: {
      large: "text-[56px] leading-[71px]",
      medium: "text-2xl leading-[31px]",
      small: "text-xl leading-[26px]",
      xsmall: "text-[16px] leading-[21px]",
    },
  },
});
export default Heading;
