import { useThemeStore } from "../store/useThemeStore";
import {dataProyectos} from '../data/data.jsx';
import { CardMenu } from "../components/HomeComponents/CardMenu.jsx";
import { Icon } from '@iconify/react/dist/iconify.js';

export const Home = () => {
    const {theme, toggleTheme } = useThemeStore();
    return(
        <>
        <main className="bg-primary h-screen flex flex-col items-center justify-center dark:bg-primary-dark overflow-hidden">
            <section className=" rounded-lg min-w-[450px]">
                <h1 className="text-black dark:text-white text-4xl font-bold mb-4 flex items-center gap-4">Proyectos
                    <Icon icon="hugeicons:tailwindcss" width="40" height="40" />
                </h1>
                {
                    dataProyectos.map((item, index)=>{
                        return(
                            <CardMenu key={index} item={item} index={index}/>
                        )
                    })
                }
            </section>
            <button className="font-semibold p-2 rounded-lg bg-green-300 dark:bg-black text-black dark:text-white" onClick={toggleTheme}>{theme=== "light"?"Modo claro":"Modo Oscuro"}</button>
        </main>
        </>
    );
}