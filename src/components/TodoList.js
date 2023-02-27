import { useEffect, useState } from "react";
import TodoCard from "./TodoCard";

import classes from './components.module.css'
import { classNames } from "../helpers";
import Input from "./ui/Input";
import { Example, useSort } from "../hooks/hooks";
import SumComp from "./SumComp";
import Hoc from "./Hoc";

const types = [ 'asc', 'desc', 'letter' ]

const TodoList = ({ list, handleDelete, handleEdit, handleOpen }) => {

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

    const { sortedArray, oldArray } = useSort(list, type)

    // limit offset

    const [ pag, setPag ] = useState({
        limit: 2,
        offset: 0
    })

    const [ page, setPage ] = useState(1)

    const countPages = Math.ceil(filterSort(type).length / pag.limit)

    const handlePrevPage = () => {
        if (page === 1) return
        setPag((prev) => ({...prev, offset: prev.offset - prev.limit}))
        setPage(page - 1)
    }

    const handleNextPage = () => {
        if (page === countPages) {
            return
        }
        setPag((prev) => ({...prev, offset: prev.limit + prev.offset}))
        setPage(page + 1)
    }

    return (
        <div className="todoList">
            <Hoc Component={SumComp} displayName={'HelloWorld'}/>
            <Input value={searchValue} onChange={(e) => setSearchValue(e.target.value)} placeholder='Search tasks'/>
            {types.map((elm) => 
                <button className={classNames(classes.buttonActive, classes.button, elm === type)} onClick={() => handleChangeType(elm)}>{elm}</button>
            )}
            {filterSort(type).slice(pag.offset, pag.offset + pag.limit).map((item) => 
                <TodoCard key={item.id} todo={item} handleOpen={handleOpen} handleDelete={handleDelete}/>
            )}
            <button onClick={handlePrevPage}>Prev</button>
            <h2>{page + ' / ' +countPages}</h2>
            <button onClick={handleNextPage}>Next</button>
        </div>
     );
}
 
export default TodoList;