import { useMemo, useState } from "react";
import { StoreContext } from "./storeContext";

const StoreProvider = ({ children }) => {

    const [ searchValue, setSearchValue ] = useState('')
    const [ todoStore, setTodoStore ] = useState({})
    const [ todoList, setTodoList ] = useState([])
    const [ status, setStatus ] = useState('') // fullfilled | pending | rejected


    const filterSort = (type, search) => {
        const searched = todoList.filter(item => item.title.toLowerCase().includes(search.toLowerCase()))
    
        switch (type) {
            case 'asc': {
                setTodoList(searched.sort((a, b) => b.id - a.id))
                return
            } 
            case 'desc': {
                setTodoList(searched.sort((a, b) => a.id - b.id))
                return
            }
            case 'letter': {
                setTodoList(searched.sort((a, b) => a.title.localeCompare(b.title)))
                return
            }
            default: return
        }
    }
    
    const reducers = {
        filterSort
    }

    const value = {
        todoStore, setTodoStore,
        todoList, setTodoList,
        reducers, searchValue, setSearchValue,
        status, setStatus
    }

    return ( 
        <StoreContext.Provider value={value}>
            {children}
        </StoreContext.Provider>
     );
}
 
export default StoreProvider;