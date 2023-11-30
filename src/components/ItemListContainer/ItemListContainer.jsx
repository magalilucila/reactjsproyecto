import ItemList from './ItemList' 
const ItemlistContainer = () => {
    return (
        <section>
        <div>
            <h2 className='bg-rose-300 text-center text-3xl text-white'>Productos</h2>
            <ul className="flex flex-col items-center md:flex-row md:justify-evenly flex-wrap">
                <ItemList> Producto 1</ItemList>
                <ItemList> Producto 2 </ItemList>
                <ItemList> Producto 3 </ItemList>
                <ItemList> Producto 4 </ItemList>
                <ItemList> Producto 5 </ItemList>
                <ItemList> Producto 6 </ItemList>
                </ul>
        </div>
        </section>
    )
}

export default ItemlistContainer

