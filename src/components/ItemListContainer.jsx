import ItemList from "./ItemList";

const productos = [
    { id: 1, nombre: "stickers", precio: 100, stock: 10 },
    { id: 2, nombre: "camisetas", precio: 200, stock: 5 },
    { id: 3, nombre: "tazas", precio: 150, stock: 8 },
    { id: 4, nombre: "fotos polaroid", precio: 120, stock: 15 }
]

const ItemListContainer = () => {
    return <ItemList productos={productos}/>
}

export default ItemListContainer;   