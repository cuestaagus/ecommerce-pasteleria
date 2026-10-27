import Item from "./Item";

function ItemList(props) {
    const products = props.items;
    
    return (
        <div>
            <h2>Listado de Productos</h2>

            {products.map((product) => (
            <Item key={product.id} product={product} />
            ))}
        </div>
    );
}

export default ItemList;
