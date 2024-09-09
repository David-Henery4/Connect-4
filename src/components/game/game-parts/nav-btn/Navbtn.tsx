
interface NavbtnProps {
  btnType: "menu" | "restart"
  onClick?: () => void;
}

const Navbtn = ({ btnType, onClick }: NavbtnProps) => {
  return (
    <button className="uppercase py-3 px-6 bg-primary text-white font-bold text-base leading-[21px] rounded-[20px] hover:bg-pink active:bg-primary mobile:w-[108px] mobile:py-2" onClick={onClick}>
      {btnType}
    </button>
  )
}

export default Navbtn