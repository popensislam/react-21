import { useLocation, useNavigate, useParams } from "react-router-dom";

const IdTodo = () => {

    const id = useParams()
    const location = useLocation()
    const navigate = useNavigate()

    return ( 
        <div>
            ID TODOO
        </div>
     );
}
 
export default IdTodo;