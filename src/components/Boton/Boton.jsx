
const Boton = ({children, className = "", onClick}) => {

    return (
        <button 
            onClick={onClick}
            className={`bg-sky-600 rounded-xl size-24 py-2 px-4 text-white font-semibold my-4 mx-6 ${className}`}
        >
            {children}
        </button>
    )
}

export default Boton