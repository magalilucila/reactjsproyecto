
const Boton = ({children, className = "", onClick}) => {

    return (
        <button 
            onClick={onClick}
            className={`bg-sky-600 rounded py-2 px-4 text-white font-semibold my-4 text-center ${className}`}
        >
            {children}
        </button>
    )
}

export default Boton