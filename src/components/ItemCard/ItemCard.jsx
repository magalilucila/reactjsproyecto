import { Link } from "react-router-dom";
import Boton from "../Boton/Boton";

const ItemCard = ({item}) => {

    return (
        <article className='mr-3 mt-2 bg-sky-200 p-5 rounded-lg min-w-[400px] min-h-[625px] flex flex-col justify-evenly md:w-72'>
            <div className="flex flex-col items-center">
                <img className="w-72 h-72" src={item.img} alt= {item.name}/>
                <h3 className="text-2xl text-sky-600 py-2 font-semibold ">{item.name} </h3>
            </div>
            
            {item.stock <= 10 && <p className="font-bold text-blue-950">Quedan sólo {item.stock} unidades! </p>}
            <p className="text-bold text-2xl text-sky-600 flex justify-end"> Precio: ${item.price} </p>
            <Boton>
                <Link to={`/item/${item.id}`}> Ver más </Link>
            </Boton>
        </article> 
    );
};

export default ItemCard;