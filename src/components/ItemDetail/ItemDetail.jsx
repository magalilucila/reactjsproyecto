
import Boton from "../Boton/Boton"

const ItemDetail = ({ item }) => {
    return (
        <>
        <div key={item.id} className='bg-sky-200 px-4 p-5 m-auto mt-4  rounded-lg text-white w-72 flex flex-col  md:w-96'>
                <h3 className="text-2xl text-sky-600 py-2 font-semibold">{item.name} </h3>

            <div>
                <img src={item.img} alt= {item.name}/>
            </div>

            <div className='flex flex-wrap justify-center'>
                <p className="text-sky-500">{item.description} </p>
                <p className="text-semibold text-xl text-sky-600"> Precio: ${item.price} </p>
            </div>

            <div>
                <Boton>Añadir al carrito </Boton>
            </div>

        </div> 
        </>
    )
};

export default ItemDetail;