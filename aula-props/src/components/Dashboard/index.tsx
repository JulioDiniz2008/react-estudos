import "./Dashboard.css"

type DashboardProps = {
    username: string | null
}

export const Dashboard = ({username}: DashboardProps) => {

    console.log(username);
    
    return (
        <div>
            {username ? (
                <h1>Bem-vindo {username}</h1>
            ) : (
                <h2 className="not-logged">Você precisa fazer login</h2>
            )}
        </div>
    );
};