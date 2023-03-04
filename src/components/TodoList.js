import { useContext, useEffect, useState } from "react";
import TodoCard from "./TodoCard";

import classes from './components.module.css'
import { classNames } from "../helpers";
import Input from "./ui/Input";
import SumComp from "./SumComp";
import Hoc from "./Hoc";
import { StoreContext } from "../store/storeContext";

const types = [ 'asc', 'desc', 'letter' ]

const TodoList = ({ handleDelete, handleEdit, handleNextPage, handlePrevPage, handleOpen, page }) => {

    const { todoList, searchValue, setSearchValue, reducers, status } = useContext(StoreContext)
    const [ type, setType ] = useState('asc')

    const handleChangeType = (type) => {
        setType(type)
        localStorage.setItem('type', type)
    }

    const handleChangeValue = (e) => {
        reducers.filterSort(type, e.target.value)
        setSearchValue(e.target.value)
    }

    useEffect(() => {
        const type = localStorage.getItem('type')
        if (!type) return
        setType(type)
    }, [])

    
    if (status === 'pending') {
        return <div>
            <h1>
                LOADING
            </h1>
        </div>
    }

    return (
        <div className="todoList">
            <Hoc Component={SumComp} displayName={'HelloWorld'}/>
            <Input value={searchValue} onChange={handleChangeValue} placeholder='Search tasks'/>
            {types.map((elm) => 
                <button className={classNames(classes.buttonActive, classes.button, elm === type)} onClick={() => handleChangeType(elm)}>{elm}</button>
            )}



            {todoList.map((item) => 
                <TodoCard key={item.id} todo={item} handleOpen={handleOpen} handleDelete={handleDelete}/>
            )}



            <button onClick={handlePrevPage}>Prev</button>
            <h2>{page}</h2>
            <button onClick={handleNextPage}>Next</button>
        </div>
     );
}
 
export default TodoList;