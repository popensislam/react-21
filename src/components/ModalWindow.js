import { useEffect, useState } from "react";
import Form from "./Form";
import ModalWrapper from "./ModalWrapper";
import Input from "./ui/Input";

const ModalWindow = ({ handleClose, handleEdit, handleAdd, currentTodo }) => {

    const [ value, setValue ] = useState('')
    const [ value2, setValue2 ] = useState('')

    const keydown = (e) => {
        if (e.key === 'Escape') {
            handleClose()
        }
    }

    useEffect(() => {
        window.addEventListener('keydown', keydown)

        return () => {
            window.removeEventListener('keydown', keydown)
        }
    }, [])

    return (
        <ModalWrapper>
            <div className="modalWrapper" onClick={handleClose}>
                <div className="modal" onClick={(e) => {
                    e.stopPropagation()
                }}>
                    <Input value={value} onChange={(e) => setValue(e.target.value)}/>
                    <Input value={value2} onChange={(e) => setValue2(e.target.value)}/>

                    <Form handleClose={handleClose} handleEdit={handleEdit} handleAdd={handleAdd} currentTodo={currentTodo}/>
                </div>
            </div>
        </ModalWrapper>
     );
}
 
export default ModalWindow;