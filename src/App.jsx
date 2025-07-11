import './App.css'
import citroenen from './assets/citroenen.jpeg'
import limoenen from './assets/limoenen.png'
import ijsblokjes from './assets/ijsblokjes.jpg'
import ShoppingCart from './assets/winkelmandje.svg?react';

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
            <article className={"product"}>
                <img src={citroenen} alt="lemon image"/>
                <h2>Citroen</h2>
                <p>
                    Een citroen is voor de meeste mensen te zuur om zo uit de hand te eten. Van citroen kun je het vruchtvlees, het sap en de schil gebruiken. Het sappige, lichtgele zure vruchtvlees versterkt de smaak van ander voedsel.
                </p>
            </article>
            <article className={"product"}>
                <img src={limoenen} alt=""/>
                <h2>Limoen</h2>
                <p>Limoen is familie van de citroen en de sinaasappel en behoort tot de citrusvruchten (Wijnruitfamilie). Limoenen zijn rond en kleiner dan citroenen. De schil is dun, vrij glad en groen.</p>
            </article>
            <article className={"product"}>
                <img src={ijsblokjes} alt=""/>
                <h2>Ijsblokje</h2>
                <p>Een ijsblokje of ijsklontje is bevroren water in de vorm van een klein blokje. Het wordt gemaakt in een diepvriezer door water in een plastic vorm te laten bevriezen.</p>
            </article>
        </main>
        </>
    )
}

function logClick(){
    console.log('You clicked!');
}

export default App
