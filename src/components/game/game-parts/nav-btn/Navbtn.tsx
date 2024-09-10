
interface NavbtnProps {
  btnType: "menu" | "restart" | "play again"
  onClick?: () => void;
}

const Navbtn = ({ btnType, onClick }: NavbtnProps) => {
  return (
    <button
      className={`uppercase py-3 bg-primary text-white font-bold text-base leading-[21px] rounded-[20px] hover:bg-pink active:bg-primary mobile:py-2 ${
        btnType === "play again"
          ? "w-full max-w-[130px] px-3"
          : "px-5 mobile:w-[108px]"
      }`}
      onClick={onClick}
    >
      {btnType}
    </button>
  );
}

export default Navbtn