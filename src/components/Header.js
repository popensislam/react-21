
import { Fragment, useState } from 'react';
import classes from '../style.module.css'
import ModalWindow from './ModalWindow';

const Header = (props) => {
    const { links, children } = props
    const [ state, setState ] = useState([])

    const [ show, setShow ] = useState(false)

    const handleInc = () => {
        setState(prev => {
            return [ ...prev, {id: 1, title: 'Hello'}, {id: 2, title: 'Bro'}, {id: 3, title: '!'}]
        })
    }

    const onToggle = () => {
        setShow(prev => !prev)
    }

    const handleClose = () => {
        setShow(false)
    }

    return ( 
        <div className={classes.header}>
            <button onClick={onToggle}>TOGGLE</button>
            <button onClick={handleInc}>+++++</button>
            {state?.map((item, i) => 
                <Fragment key={i}>
                    <h1 key={item.id}>{item.title}</h1>
                </Fragment>
            )}

            {show && (
                <ModalWindow handleClose={handleClose}/>
            )}
        </div>
     );
}
 
export default Header;