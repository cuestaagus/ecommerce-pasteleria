import { useEffect, useState } from "react";
import { getProductById } from "../services/getProductById";
import ItemDetail from "./ItemDetail";

function ItemdetailContainer () {
    const [product, setProduct] = useState(null);
    const [error, setError] = useState(null);

    useEffect(() => {
        getProductById(1)
            .then((product) => {
                setProduct(product);
            })
            .catch((error) => {
                setError(error.message);
            });
    }, []);

    if (error) {
        return <p>{error}</p>;
    }

    if (!product) {
        return <p>Cargando prodcuto...</p>;
    }

    return <ItemDetail product={product} />;
}

export default ItemdetailContainer;