import { PropsWithChildren } from "react";

const BaseText = ({children}: PropsWithChildren) => {
  return (
    <p className="text-base text-black/60 leading-[21px] font-medium">{children}</p>
  )
}

export default BaseText
