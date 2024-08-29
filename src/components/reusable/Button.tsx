import { cn } from "@/libs/utils";
import { cva } from "class-variance-authority";
import { ButtonHTMLAttributes } from "react";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "third"
}

const Button = ({ variant, children, className, ...props }: ButtonProps) => {
  return (
    <button className={cn(buttonVariants({ variant }), className)} {...props} />
  );
};

const buttonVariants = cva(
  "w-full max-w-[400px] mx-auto p-5 rounded-[20px] border-[3px] border-b-[6px] border-black hover:border-secondary",
  {
    variants: {
      variant: {
        primary: "bg-pink text-white",
        secondary: "bg-white text-black",
        third: "bg-yellow text-black",
      },
    },
  }
);

export default Button;
