import Boton from "../Boton/Boton"


const QuantitySelector = ({cantidad, stock, setCantidad}) => {

    const handleSumar = () => {
        cantidad < stock && setCantidad(cantidad + 1)  
    }

    const handleRestar = () => {
        cantidad > 1 && setCantidad(cantidad - 1)  
    }

    return (
        <div className="flex gap-4 items-center text-blue-600">
        <Boton onClick={handleRestar} className={cantidad === 1 ?`bg-blue-200`
        : `bg-blue-600`}> -</Boton>
        <span>{cantidad}</span>
        <Boton onClick={handleSumar} className={cantidad === stock ?`bg-blue-200`
        : `bg-blue-600`}>+</Boton>
    </div>
    );
};

export default QuantitySelector;