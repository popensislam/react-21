const Title = ({ size, children }) => {
    return ( 
        <h1 style={{ fontSize: size, textAlign: 'center'}}>{children}</h1>
    );
}
 
export default Title;