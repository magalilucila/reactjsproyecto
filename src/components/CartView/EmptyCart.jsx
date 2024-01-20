import { Link } from "react-router-dom"
import Boton from "../Boton/Boton"

const EmptyCart = () => {
    return (
        <section className="container m-auto mt-8 flex flex-col">
            <h2 className="text-4xl font-semibold"> Tu carrito esta vacío:</h2>
                        <p>Agrega productos a tu carrito</p>
                        <Boton>
                            <Link to={"/"}>Agregar productos</Link>
                        </Boton>
        </section>
    )
}

export default EmptyCart