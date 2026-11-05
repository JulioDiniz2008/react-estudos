import { useContext } from "react"
import { themeConfig } from "../../contexts/theme"
import { ThemeContext } from "../../contexts/ThemeContext"



interface TodoContainerProps {
    children: React.ReactNode
}



export const TodoContainer = ({ children }: TodoContainerProps) => {

    const { theme } = useContext(ThemeContext);

    return (
        <main className={`${themeConfig[theme].layout.backgroundColor} min-h-screen relative`}>
            <div className={`${themeConfig[theme].layout.heroClass} h-80 bg-cover bg-center absolute top-0 left-0 w-full`}></div>

            <div className="max-w-175 m-auto p-8 relative z-10">
                {children}
            </div>
        </main>
    )
}
