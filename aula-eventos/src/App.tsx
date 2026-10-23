import type { SubmitEvent, KeyboardEvent, ChangeEvent } from 'react';
import './App.css'

function App() {
  const handleClick = (name: string) => {
    alert(`${name} clicou no botão`);
  }

   const handleKeyPress = (event: KeyboardEvent<HTMLInputElement>) => {
    console.log('a tecla pressionada foi:', event.key)
  }

  const handleSubmit = (event: SubmitEvent<HTMLFormElement>) => {
    event.preventDefault();
    
    alert('O formulário foi enviado')
  }

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    console.log(event.target.value);
  }

  return (
    <>
      <button type='button' onClick={() => handleClick('Ricardo')}>Clique aqui</button>

      <input type='text' onKeyDown={handleKeyPress}/>

      <form action="" onSubmit={handleSubmit}>
        <input type='text' placeholder='Digite algo' onChange={handleChange}/>
        <button type='submit'>Enviar</button>
      </form>
    </>

    
  )
}

export default App
