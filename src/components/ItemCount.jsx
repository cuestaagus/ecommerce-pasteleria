import { useState } from "react";

function ItemCount({ stock }) {
    const [count, setCount] = useState(Math.min(1, stock));

    const handleAdd = () => {
        if (count < stock) {
            setCount(count + 1);
        }
    };

    const handleSubtract = () => {
        if (count > 0) {
            setCount(count - 1);
        }
    };

    return (
        <div className="item-count">
            <button onClick={handleSubtract} disabled={count === 0}>
                -
            </button>

            <span>{count}</span>

            <button onClick={handleAdd} disabled={count >= stock}>
                +
            </button>
        </div>
    );
}

export default ItemCount;