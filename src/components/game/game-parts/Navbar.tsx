import Navbtn from "./nav-btn/Navbtn"
import { LogoIcon } from "../../../../public/assets/images"

const Navbar = () => {
  return (
    <nav className='flex justify-between items-center'>
      <Navbtn btnType="menu" />
      <LogoIcon/>
      <Navbtn btnType="restart" />
    </nav>
  )
}

export default Navbar