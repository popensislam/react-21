
import classes from '../components.module.css'

const Input = (props) => {
    const { ...otherProps } = props
    return <input className={classes.inputCustom} {...otherProps} />
}
 
export default Input;