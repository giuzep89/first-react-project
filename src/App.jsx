import './App.css'
import citroenen from './assets/citroenen.jpeg'
import limoenen from './assets/limoenen.png'
import ijsblokjes from './assets/ijsblokjes.jpg'
import ShoppingCart from './assets/winkelmandje.svg?react'
import Product from "./components/Product.jsx";

function App() {
    return (
        <>
            <nav>
                <ul>
                    <li><a href="/"></a>Shop</li>
                    <li><a href="/"></a>Ons verhaal</li>
                    <li><a href="/"></a>Blog</li>
                </ul>
                <ShoppingCart className="shopping-cart-icon"/>
            </nav>
        <header>
        <h1>Fruit Perfection</h1>
            <button type={"button"} onClick={logClick}>Shop nu</button>
        </header>
        <main>
            <Product className="product"
                     image={citroenen} alt="lemon image"
                     title="Citroen"
                     text="Een citroen is voor de meeste mensen te zuur om zo uit de hand te eten. Van citroen kun je het vruchtvlees, het sap en de schil gebruiken. Het sappige, lichtgele zure vruchtvlees versterkt de smaak van ander voedsel."/>
            <Product className="product"
                     image={limoenen} alt="lime image"
                     title="Limoen"
                     text="Limoen is familie van de citroen en de sinaasappel en behoort tot de citrusvruchten (Wijnruitfamilie). Limoenen zijn rond en kleiner dan citroenen. De schil is dun, vrij glad en groen."/>
            <Product className="product"
                     image={ijsblokjes} alt="ice cubes image"
                     title="IJsblokjes"
                     text="Een ijsblokje of ijsklontje is bevroren water in de vorm van een klein blokje. Het wordt gemaakt in een diepvriezer door water in een plastic vorm te laten bevriezen."/>
        </main>
        </>
    )
}

function logClick(){
    console.log('You clicked!');
}

export default App
