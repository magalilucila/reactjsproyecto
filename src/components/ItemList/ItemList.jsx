import ItemCard from "../ItemCard/ItemCard"

const ItemList = ({productos}) => {
    return (
        <section>
            <h2 className='bg-sky-400 text-2xl text-white mb-8 px-6 md:text-3xl'> Productos </h2>
            <div className="flex flex-wrap justify-center gap-10 items-center">
                {productos.map ((item) => <ItemCard key={item.id} item={item}/> )}
            </div>
        </section>
    )
};

export default ItemList;