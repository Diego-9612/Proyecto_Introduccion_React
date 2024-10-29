import './TodoTitle.css';

function TodoTitle({ total, completed }) {
    return (
        <h1 className="TodoTitle">
            Has Completado <span> {completed} </span> de <span> {total} </span> Tareas
        </h1>
    );
}

export { TodoTitle };
