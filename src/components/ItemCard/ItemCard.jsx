import { Link } from "react-router-dom";
import Boton from "../Boton/Boton";

const ItemCard = ({item}) => {

    return (
        <article className='mr-3 mt-2 bg-sky-200 px-4 p-5 rounded-lg text-white w-72 flex flex-col  md:w-72'>
            <img className="w-72 h-72" src={item.img} alt= {item.name}/>
            <h3 className="text-2xl text-sky-600 py-2 font-semibold ">{item.name} </h3>
            <p className="text-sky-500">{item.description} </p>
            <p className="text-semibold text-xl text-sky-600"> Precio: ${item.price} </p>
            <Boton>
                <Link to={`/item/${item.id}`}> Ver más </Link>
            </Boton>
        </article> 
    );
};

export default ItemCard;