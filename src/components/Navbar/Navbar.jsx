import { Link } from 'react-router-dom';
import CartContent from '../CartContent/CartContent'


const Navbar = () => {
    return (
        <header>
            <div className='bg-sky-500 bg-cover py-2 px-2 flex justify-between flex-col flex-wrap md:flex-row items-center'>
                <img src="../../public/alunhadas.png" alt="" className='w-auto h-20'/>
                <nav className='flex gap-4'>
                    <Link className=" text-white text-sm  hover:text-sky-600 md:text-xl" 
                    to={"/"}> Inicio </Link> 
                    <Link className=" text-white hover:text-sky-600 md:text-xl" 
                    to={"/productos/Esmaltes"}>Semipermanente</Link>
                    <Link className=" text-white hover:text-sky-600 md:text-xl" 
                    to={"/productos/Cabinas"}>Cabinas y tornos</Link>
                    <Link className=" text-white hover:text-sky-600 md:text-xl" 
                    to={"/productos/Combo"}>Nail Art</Link>
                </nav>
                <CartContent />
            </div>
        </header>
    )
};

export default Navbar;