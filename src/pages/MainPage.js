import { useEffect, useState } from "react";
import ModalWindow from "../components/ModalWindow";
import Title from "../components/Title";
import TodoList from "../components/TodoList";

const MainPage = () => {

    const [ todoList, setTodoList ] = useState([])
    const [ isShow, setIsShow] = useState(false)
    const [ currentTodo, setCurrentTodo ] = useState({})

    const handleAdd = (data) => {
      const newTodoList = [ ...todoList, { ...data, id: Date.now()} ]
      setTodoList(newTodoList)
    }
  
    const handleDelete = (id) => {
      const newTodoList = todoList.filter((item) => item.id !== id)
  
      if (newTodoList.length === 0) {
        localStorage.setItem('list', JSON.stringify(newTodoList))
      }
    
      setTodoList(newTodoList)
    }
  
    const handleEdit = (data) => {
      const newTodoList = todoList.map((item) => {
        if (item.id === data.id) {
          return data
        } else {
          return item
        }
      })
    
      setTodoList(newTodoList)
    }
  
    const handleOpen = (todo) => {
      setIsShow(true)
      setCurrentTodo(todo)
    }

    const handleClose = () => {
      setIsShow(false)
      setCurrentTodo({})
    }

    const [ count, setCount ] = useState(0)

    // useEffect(() => {
    //   if ( count === 10) {
    //     return
    //   }
    //   const timeoutId = setTimeout(() => {
    //     setCount(prev => prev + 1)
    //   }, 1000)

    //   return () => {
    //     clearInterval(timeoutId)
    //   }
    // }, [ count ])

    useEffect(() => {
      const list = JSON.parse(localStorage.getItem('list'))
      setTodoList(list)
    }, [])

    useEffect(() => {
      if ( todoList.length === 0 ) {
        return
      }

      localStorage.setItem('list', JSON.stringify(todoList))
    }, [ todoList ])

    return ( 
        <div className="mainPage">
            <h1>{count}</h1>
            <h1 onClick={() => setCount(count + 1)}>increse</h1>
            <Title size={26}>
                Todo List
            </Title>
            <button onClick={() => setIsShow(true)}>Создать таск</button>
            <TodoList handleEdit={handleEdit} list={todoList} handleDelete={handleDelete} handleOpen={handleOpen}/>
            {
                isShow && (
                <ModalWindow handleEdit={handleEdit} currentTodo={currentTodo} handleAdd={handleAdd} handleClose={handleClose}/>
                )
            }
        </div>
     );
}
 
export default MainPage;