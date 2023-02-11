import { useState } from "react"

const Footer = () => {
    const [ state, setState ] = useState([])

    const handleInc = () => {
        setState(prev => {
            return [ ...prev, {id: 1, title: 'Hello'}, {id: 2, title: 'Bro'}, {id: 3, title: '!'}]
        })
    }
    return ( 
        <div className="footer">
            <button onClick={handleInc}>+++++</button>
            {state?.map((item, i) => 
                <h1 key={item.id}>{item.title}</h1>
            )
            }
        </div>
     );
}
 
export default Footer;