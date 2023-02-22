import { useEffect, useState } from "react";
import TodoCard from "./TodoCard";

import classes from './components.module.css'
import { classNames } from "../helpers";
import Input from "./ui/Input";
import { Example, useSort } from "../hooks/hooks";

const types = [ 'asc', 'desc', 'letter' ]

const TodoList = ({ list, handleDelete, handleEdit, handleOpen }) => {

    const [ type, setType ] = useState('asc')
    const [ searchValue, setSearchValue ] = useState('')

    const filterSort = (type) => {
        switch (type) {
            case 'asc': {
                return list.sort((a, b) => b.id - a.id)
            } 
            case 'desc': {
                return list.sort((a, b) => a.id - b.id)
            }
            case 'letter': {
                return list.sort((a, b) => a.title.localeCompare(b.title))
            }
            default: return list
        }
    }

    const handleChangeType = (type) => {
        setType(type)
        localStorage.setItem('type', type)
    }

    useEffect(() => {
        const type = localStorage.getItem('type')
        if (!type) return
        setType(type)
    }, [])

    const { sortedArray, oldArray } = useSort(list, type)

    console.log(sortedArray)

    return (
        <div className="todoList">
            <Input value={searchValue} onChange={(e) => setSearchValue(e.target.value)} placeholder='Search tasks'/>
            {types.map((elm) => 
                <button className={classNames(classes.buttonActive, classes.button, elm === type)} onClick={() => handleChangeType(elm)}>{elm}</button>
            )}
            {filterSort(type).map((item) => 
                <TodoCard key={item.id} todo={item} handleOpen={handleOpen} handleDelete={handleDelete}/>
            )}
        </div>
     );
}
 
export default TodoList;