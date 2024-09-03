import { PropsWithChildren } from "react";

interface Props extends PropsWithChildren { 
  className?: string
}

const BaseText = ({children, className}: Props) => {
  console.log(className)
  return (
    <p className={`text-base text-black/60 leading-[21px] font-medium ${className}`}>{children}</p>
  )
}

export default BaseText
