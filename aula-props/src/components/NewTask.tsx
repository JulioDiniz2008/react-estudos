type taskProps = {
    description?: string;
};

const NewTask = ({description = 'Nenhuma tarefa registrada'}: taskProps) => {
    return <p>Tarefa: {description}</p>
}

export default NewTask;