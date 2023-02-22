import { useEffect, useState } from "react";
import Form from "./Form";
import Input from "./ui/Input";

const ModalWindow = ({ handleClose, handleEdit, handleAdd, currentTodo }) => {

    const [ value, setValue ] = useState('')
    const [ value2, setValue2 ] = useState('')

    return (
        <>
            <div className="modalWrapper" onClick={handleClose}>
            </div>
            <div className="modal">
                <Input value={value} onChange={(e) => setValue(e.target.value)}/>
                <Input value={value2} onChange={(e) => setValue2(e.target.value)}/>

                <Form handleClose={handleClose} handleEdit={handleEdit} handleAdd={handleAdd} currentTodo={currentTodo}/>
            </div>
        </>
     );
}
 
export default ModalWindow;