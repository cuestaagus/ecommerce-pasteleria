import CartWidget from "./CartWidget";

function Navbar() {
    const categorias = ["Tortas", "Cookies", "Alfajores", "Budines"];
    
    return (
        <nav>
            <h2>Miguita 🍪</h2>
            
            <ul>
                {categorias.map((categoria) => (
                    <li key={categoria}>
                        <a href="#">{categoria}</a>
                    </li>
                ))}
            </ul>
            
            <CartWidget/>
        </nav>
    );
}

export default Navbar;
