import { useEffect, useState } from "react";
import TodoCard from "./TodoCard";

import classes from './components.module.css'
import { classNames } from "../helpers";
import Input from "./ui/Input";
import SumComp from "./SumComp";
import Hoc from "./Hoc";

const types = [ 'asc', 'desc', 'letter' ]

const TodoList = ({ list, handleDelete, handleEdit, handleNextPage, handlePrevPage, handleOpen, page }) => {

    const [ type, setType ] = useState('asc')
    const [ searchValue, setSearchValue ] = useState('')

    const filterSort = (type) => {
        const searched = list.filter(item => item.title.toLowerCase().includes(searchValue.toLowerCase()))

        switch (type) {
            case 'asc': {
                return searched.sort((a, b) => b.id - a.id)
            } 
            case 'desc': {
                return searched.sort((a, b) => a.id - b.id)
            }
            case 'letter': {
                return searched.sort((a, b) => a.title.localeCompare(b.title))
            }
            default: return searched
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

    return (
        <div className="todoList">
            <Hoc Component={SumComp} displayName={'HelloWorld'}/>
            <Input value={searchValue} onChange={(e) => setSearchValue(e.target.value)} placeholder='Search tasks'/>
            {types.map((elm) => 
                <button className={classNames(classes.buttonActive, classes.button, elm === type)} onClick={() => handleChangeType(elm)}>{elm}</button>
            )}
            {filterSort(type).map((item) => 
                <TodoCard key={item.id} todo={item} handleOpen={handleOpen} handleDelete={handleDelete}/>
            )}
            <button onClick={handlePrevPage}>Prev</button>
            <h2>{page}</h2>
            <button onClick={handleNextPage}>Next</button>
        </div>
     );
}
 
export default TodoList;