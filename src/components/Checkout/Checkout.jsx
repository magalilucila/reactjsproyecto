import { useContext } from "react"
import { useState } from "react"
import { CartContext } from "../../context/CartContext"
import { db } from "../../firebase/config"
import { collection, addDoc } from "firebase/firestore"

const Checkout = () => {
    const {cart, totalCart, clearCart} = useContext(CartContext)

    const [values, setValues] = useState({
        nombre: '',
        direccion: '',
        email: ''
})

    const [orderId, setOrderId] = useState(null)

    const handleInputChange = (e) => {

    setValues({
        ...values, 
        [e.target.name]: e.target.value
    })
}

    const handleSubmit = (e) => {
        e.preventDefault();

        const orden = {
            cliente: values,
            items: cart,
            total: totalCart(),
            fecha: new Date()
        };
        const ordersRef= collection(db, 'orders')
        addDoc(ordersRef, orden).then((doc) => {
            setOrderId(doc.id)
            clearCart()
        });
    };

    if (orderId) {
        return(
        <div className="container m-auto mt-10">
            <h2 className="text-4xl font-semibold px-5"> Gracias por tu compra!</h2>
            <p>Tu código de orden es: {orderId} </p>
        </div>
        );
    }


    return (
    <div className="container m-auto mt-10">
        <h2 className="text-4xl font-semibold px-5"> Ingresa tus datos:</h2>
        <form onSubmit={handleSubmit} className="flex flex-col gap-4 text-center max-w-md m-4">
            <input value={values.nombre} className="border p-2" type="text" placeholder="Nombre" onChange={handleInputChange} name="nombre" />
            <input value={values.direccion} className="border p-2" type="text" placeholder="Dirección" onChange={handleInputChange} name="direccion"/>
            <input value={values.email} className="border p-2" type="email" placeholder="Email" onChange={handleInputChange} name="email"/>
            <button type="submit" className="bg-blue-500 text-white py-2">Enviar</button>
        </form>
    </div>
    )
}

export default Checkout 