import { useContext, useEffect, useState } from "react";
import { useLocation, useNavigate, useParams } from "react-router-dom";
import { fetchTodosById } from "../requests";
import { StoreContext } from "../store/storeContext";

const IdTodo = () => {

    const { id } = useParams()

    const { todoStore, setTodoStore } = useContext(StoreContext)
 
    useEffect(() => {
        fetchTodosById(id)
            .then((data) => {
                setTodoStore(data.data)
            })
    }, [])

    return ( 
        <div>
            ID TODOO
        </div>
     );
}
 
export default IdTodo;