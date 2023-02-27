const Hoc = ({ Component, displayName }) => {

    Hoc.displayName = displayName
    Component.displayName = 'Example'

    return ( 
        <div className="wrapper">
            <Component render={(sum, sum2) => {
                return (
                    <div style={{ height: '100px' }} onClick={() => console.log(sum, sum2)}>
                        <h1>{sum} + {sum2} = {sum + sum2}</h1>
                    </div>
                )
            }}/>
        </div>
    );
}
 
export default Hoc;