import './App.css'
import { Dashboard } from './components/Dashboard'


function App() {

  return (
    <>
    <Dashboard username='Ricardo'></Dashboard>
    <Dashboard username={null}></Dashboard>
    </>
  )
};

export default App
