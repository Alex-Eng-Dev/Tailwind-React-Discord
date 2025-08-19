import { Icon } from "@iconify/react/dist/iconify.js";
import { BsPlus, BsFillLightningFill, BsGearFill } from "react-icons/bs";
import { FaPoo } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

export const Sidebar = ()=> {
    const navigate = useNavigate();
    return(
        <>
        <section className="top-0 left-0 h-screen bg-white dark:bg-[#1E1F22] shadow-lg  md:flex flex-col w-16 md:fixed p-2">
            <SidebarIcon funcion={()=>navigate(-1)} icon={<Icon icon="streamline-color:discord" width="35" height="35" />} text="Inicio" />
            <Divider />
            <SidebarIcon icon={<BsPlus size={35}/> } text="Nuevo Chat"/>
            <SidebarIcon icon={<BsFillLightningFill size={29}/>} text="Membresia Boost"/>
            <SidebarIcon icon={<FaPoo size={29}/>} text="Archivados"/>
            <Divider />
            <SidebarIcon icon={<BsGearFill size={32}/>} text="Configuraciones"/>
        </section>
        </>
    )
}
    
    


const SidebarIcon = ({icon, text="", funcion}) => (
        <>
        <div onClick={funcion} className="relative flex items-center justify-center h-12 w-12 my-2 mx-auto bg-gray-400 dark:bg-[#313338] hover:bg-[#5865F2] text-white hover:text-white/80 rounded-full hover:rounded-xl transition-all duration-100 ease-linear cursor-pointer shadow-lg group">
        {icon}
        <span className="absolute w-auto p-2 m-2 min-w-max left-14 rounded-md shadow-md bg-black transition-all duration-100 scale-0 origin-left group-hover:scale-100">{text}</span>
        </div>
        </>
    )


const Divider = () =>(

    <hr className="bg-gray-200 dark:bg-[#3a3a3a] border border-gray-200 dark:border-[#3a3a3a] rounded-full mx-2"/>
) 