import { useState, type ChangeEvent } from "react";



export const Formulário = () => {
    const [value, setValue] = useState<string>('');
    const [result, setResult] = useState<string>('');

    const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
        setValue(event.target.value);
    }

    const handleClick = () => {
        setResult(value);
    }

    return (
        <form>
            <input type="text" placeholder="Digite algo" value={value} onChange={handleChange}/>
            <button type="button" onClick={handleClick}>Clicar</button>

            {result && <p>Você digitou: {result}</p>}
        </form>
    )
}