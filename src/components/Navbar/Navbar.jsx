import CartContent from '../CartContent/CartContent'
import NavbarLink from './NavbarLink'
// para importar una imagen que tengo en asset pongo:
//import logo from 'ruta al archivo con ../../assets/nombredelaimagen' y en src de donde puse la imagen (abajo) pongo la palabra después del import, en este caso {logo} tiene que estar entre llaves.
//para importar una imagen que tengo en public pongo directamente donde esta la imagen en el src= "/imgs/nombredelaimagen" 

const Navbar = () => {
    return (
        <header>
            <div className='bg-sky-400 bg-cover p-8 flex justify-between flex-col md:flex-row items-center'>
                <nav className='flex gap-5'>
                    <NavbarLink href={"#"} text={"Inicio"} />
                    <NavbarLink href={"#"} text={"Productos"} />
                    <NavbarLink href={"#"} text={"Contacto"} />
                </nav>
                <h1 className='text-white  text-5xl '>Alunhadas</h1>
                <CartContent />
            </div>
        </header>
    )
}

export default Navbar