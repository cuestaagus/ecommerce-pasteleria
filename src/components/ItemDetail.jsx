import ItemCount from "./ItemCount";

function ItemDetail({ product}) {
    return (
        <div className="item-detail">
            <div className="item-detail-image">
                <img src={product.img} alt={product.name} />
            </div>

            <div className="item-detail-info">
                <p>{product.category}</p>

                <h2>{product.name}</h2>

                <h3>€{product.price.toFixed(2)}</h3>

                <p>{product.description}</p>

                <p>Disponibles: {product.stock} unidades</p>

                <ItemCount stock={product.stock} />
            </div>

        </div>
    );
}

export default ItemDetail;