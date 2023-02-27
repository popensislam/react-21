import { useState } from "react";

const SumComp = ({ render }) => {
    
    const [ sum, setSum ] = useState(2)
    const [ sum2, setSum2 ] = useState(2)

    console.log(render)

    return (
        <>
        {render(sum, sum2)}
        </>
    )
}
 
export default SumComp;