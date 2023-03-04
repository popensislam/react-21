import { lazy, useContext, useEffect, useState } from "react";
import Title from "../components/Title";
import TodoList from "../components/TodoList";
import { fetchTodosByParams } from "../requests";
import { StoreContext } from "../store/storeContext";

const ModalWindow = lazy(() => import("../components/ModalWindow"))

const MainPage = () => {

    const { todoList, setTodoList, searchValue, setStatus, status } = useContext(StoreContext)
    const [ isShow, setIsShow] = useState(false)
    const [ currentTodo, setCurrentTodo ] = useState({})
    const [ page, setPage ] = useState(1)

    const handleAdd = (data) => {
      const newTodoList = [ ...todoList, { ...data, id: Date.now()} ]
      setTodoList(newTodoList)
    }
  
    const handleDelete = (id) => {
      const newTodoList = todoList.filter((item) => item.id !== id)
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

    const handlePrevPage = () => {
      if (page === 1) return
      setPage(page - 1)
  }

  const handleNextPage = () => {
      setPage(page + 1)
  }
  
    const handleOpen = (todo) => {
      setIsShow(true)
      setCurrentTodo(todo)
    }

    const handleClose = () => {
      setIsShow(false)
      setCurrentTodo({})
    }

    useEffect(() => {
          setStatus('pending')
          const params = {
            _limit: 3,
            _page: page,
          }
          fetchTodosByParams(params).then((data) => {
            if (data.status === 200) {
              setTodoList(data.data)
              setStatus('fullfilled')
            } else {
              setStatus('rejected')
            }
          })
   }, [ page ])

    useEffect(() => {
      if (!searchValue) {
        setStatus('pending')
        const params = {
          _limit: 3,
          _page: page,
        }
        fetchTodosByParams(params).then((data) => {
          if (data.status === 200) {
            setTodoList(data.data)
            setStatus('fullfilled')
          } else {
            setStatus('rejected')
          }
        })
      }
  }, [searchValue])

    return ( 
        <div className="mainPage">
            <Title size={26}>
                Todo List
            </Title>
            <button onClick={() => setIsShow(true)}>Создать таск</button>
            <TodoList 
              page={page} 
              handleNextPage={handleNextPage} 
              handlePrevPage={handlePrevPage} 
              handleEdit={handleEdit}
              handleDelete={handleDelete} 
              handleOpen={handleOpen}
            />
            {
                isShow && (
                <ModalWindow handleEdit={handleEdit} currentTodo={currentTodo} handleAdd={handleAdd} handleClose={handleClose}/>
                )
            }
        </div>
     );
}
 
export default MainPage;