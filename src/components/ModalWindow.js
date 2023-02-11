const ModalWindow = ({ handleClose }) => {
    return (
        <>
            <div className="modalWrapper" onClick={handleClose}>
            </div>
            <div className="modal">
                <h1 onClick={handleClose}>WORK</h1>
            </div>
        </>
     );
}
 
export default ModalWindow;