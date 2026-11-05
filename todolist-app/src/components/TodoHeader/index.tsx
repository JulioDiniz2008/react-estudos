import { themeConfig } from '../../contexts/theme';
import { useContext } from 'react';
import { ThemeContext } from '../../contexts/ThemeProvider'


const TodoHeader = () => {

    const { theme, toggleTheme } = useContext(ThemeContext);


    return (
        <header className='mb-10 flex justify-between pt-20'>

            <h1 className='text-white text-4xl sm:text-[2.5rem] font-bold tracking-[1rem]'>TODO</h1>

            <button className='cursor-pointer' onClick={toggleTheme}>
                <img className='w-8 h-8' src={themeConfig[theme].icon} alt="Alternar tema" />
            </button>
        </header>
    )
}

export default TodoHeader;