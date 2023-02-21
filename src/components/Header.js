import { Link } from "react-router-dom";

const Header = () => {
    return (
    <header>
        <section className="name">
            <p className="name2">Bryan Runnels </p> 
            <p id="personalQuote"> “Be mindful. Be grateful. Be positive. Be true. Be kind.” - Roy T. Bennett </p>
            <p className="name2"> Aspiring Developer </p>
        
            <nav className="website-menu">           
                <button> <Link  className="navbar" to="/about">About</Link> </button>
                <button> <Link  className="navbar" to="/"> Home </Link> </button>
                <button> <Link  className="navbar" to="/portfolio">Portfolio</Link> </button>
            </nav>
        </section>
    </header>
    )
}

export default Header;