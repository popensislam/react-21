import { useNavigate } from "react-router-dom";

const TodoCard = ({ todo, handleOpen, handleDelete }) => {
    const navigate = useNavigate()

    return (
        <div className="todocard">
            <h1 onClick={() => navigate(`${todo.id}`)}>{todo.title}123</h1>
            <h1>{todo.description}</h1>
            <button onClick={() => handleOpen(todo)}>edit</button>
            <button onClick={() => handleDelete(todo.id)}>delete</button>
        </div>
    );
}
 
export default TodoCard;