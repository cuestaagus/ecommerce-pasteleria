import { useState, useEffect } from "react";
import { getProducts } from "../mock/asyncMock";
import ItemList from "./ItemList";

function ItemListContainer(props) {
    const [items, setItems] = useState([]);
    useEffect(() => {
        const fetchProducts = async () => {
            const products = await getProducts();
            setItems(products);
        }

        fetchProducts();
    }, []);

    return (
        <div>
            <h1>{props.greeting}</h1>
            <ItemList items={items} />
        </div>
    );
}

export default ItemListContainer;

