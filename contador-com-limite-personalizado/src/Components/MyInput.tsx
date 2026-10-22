import { useState } from "react";

export const Count = () => {
    const [initialValue, setInitialValue] = useState(0);
    const [maxValue, setMaxValue] = useState(5);
    const [count, setCount] = useState(0);
    const [started, setStarted] = useState(false);

    const handleStart = () => {
        setCount(initialValue);
        setStarted(true);
    }

    const handleIncrease = () => {
        if(count < maxValue){
            setCount(prev => prev + 1)
        }
    };

    const handleDecrease = () => {
        if(count > 0){
            setCount(prev => prev - 1)
        }
    };

    if(!started){
        return (
            <div style={{border: '1px solid black', fontFamily: 'sans-serif', textAlign:'center'}}>

                <h1>Configurar contador</h1>

                <div>
                    <label>Valor inicial:</label>

                    <input type="Number" placeholder="Digite o valor inicial" value={initialValue} onChange={(event) => setInitialValue(Number(event.target.value))}/>
                </div>

                <div>
                    <label>Valor máximo:</label>

                    <input type="Number" placeholder="Digite o valor máximo" value={maxValue} onChange={(event) => setMaxValue(Number(event.target.value))}/>
                </div>

                <button type="button" onClick={handleStart}></button>
            </div>
        )
    }

    return (
        <div style={{textAlign:'center', fontFamily:'sans-serif'}}>
            <h2>Contador: {count}</h2>

            <button type="button" onClick={handleDecrease} style={{marginRight: '10px'}}>-</button>

            <button type="button" onClick={handleIncrease}>+</button>

            {count === maxValue} && (
                <p style={{color:'red'}}>Você atingiu o valor máximo!</p>
            )
        </div>
    )
}