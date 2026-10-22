import NewTask from "./NewTask"

const Tasks = () => {
    return (
        <div>
            <h2>Lista de Tarefas</h2>
            <NewTask description="Estudar React no fim de semana"/>
            <NewTask/>
        </div>
    )
}

export default Tasks;