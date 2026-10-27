
const products = [
  {
    id: 1,
    name: "Cookies con chips de chocolate",
    price: 4.5,
    category: "Cookies",
    img: "https://placehold.co/300x200?text=Cookies",
    stock: 12,
    description: "Cookies artesanales con chips de chocolate."
  },
  {
    id: 2,
    name: "Alfajores de maicena",
    price: 5,
    category: "Alfajores",
    img: "https://placehold.co/300x200?text=Alfajores",
    stock: 8,
    description: "Alfajores caseros rellenos de dulce de leche."
  },
  {
    id: 3,
    name: "Budín de limón",
    price: 6.5,
    category: "Budines",
    img: "https://placehold.co/300x200?text=Budin",
    stock: 5,
    description: "Budín esponjoso con un toque de limón."
  },
  {
    id: 4,
    name: "Torta de chocolate",
    price: 18,
    category: "Tortas",
    img: "https://placehold.co/300x200?text=Torta",
    stock: 3,
    description: "Torta casera de chocolate y nueces."
  },
  {
    id: 5,
    name: "Cookies de avena",
    price: 4,
    category: "Cookies",
    img: "https://placehold.co/300x200?text=Avena",
    stock: 10,
    description: "Cookies de avena y miel."
  }
];

export const getProducts = () => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(products);
        }, 2000);
    });
};