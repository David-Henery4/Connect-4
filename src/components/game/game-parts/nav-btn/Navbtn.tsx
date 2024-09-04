
interface NavbtnProps {
  btnType: "menu" | "restart"
}

const Navbtn = ({ btnType }: NavbtnProps) => {
  return (
    <button className="uppercase py-3 px-6 bg-primary text-white font-bold text-base leading-[21px] rounded-[20px] hover:bg-pink active:bg-primary">
      {btnType}
    </button>
  )
}

export default Navbtn