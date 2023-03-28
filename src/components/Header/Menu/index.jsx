import Profile from "./Profile.png"
import {AiOutlineTeam, AiOutlineTablet, AiFillSetting} from "react-icons/ai"
import {HiOutlineDocumentText} from "react-icons/hi"
export default function Menu(){
  const openMenu = () => {
    document.querySelector(".Menu ul").classList.toggle("open")
  }
  return(
    <nav className="Menu" onClick={openMenu}>
      <img src={Profile} alt="Foto de Perfil"/>
      <ul className="ul">
        <li><AiOutlineTablet/> Boards</li>
        <li><AiOutlineTeam/> Equipes</li>
        <li><HiOutlineDocumentText/> Relatórios</li>
        <li><AiFillSetting/> Ajustes</li>
      </ul>
    </nav>
  )
} 