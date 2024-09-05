import { cn } from "@/libs/utils";
import { cva } from "class-variance-authority";
import { ButtonHTMLAttributes } from "react";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant: "primary" | "secondary" | "third"
}

const Button = ({ variant, className, ...props }: ButtonProps) => {
  //
  return (
    <button className={cn(buttonVariants({ variant }), className)} {...props} />
  );
};

const buttonVariants = cva(
  "w-full max-w-[400px] mx-auto px-4 py-[14px] rounded-[20px] border-[3px] border-b-[12px] border-black hover:border-primary flex items-center justify-between text-left gap-4",
  {
    variants: {
      variant: {
        primary: "bg-yellow text-black",
        secondary: "bg-white text-black",
        third: "bg-pink text-white",
      },
    },
  }
);

export default Button;
