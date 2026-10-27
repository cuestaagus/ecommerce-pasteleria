function Item(props) {
    return (
        <div>
            <h3>{props.product.name}</h3>
            <p>{props.product.description}</p>
            <p>Precio: €{props.product.price}</p>
            <img 
                src={props.product.img} 
                alt={props.product.name} 
            />
        </div>
    );
}

export default Item;