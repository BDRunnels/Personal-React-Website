const HomeHeader = () => {
    return (
    <header>
        <section className="name">
            <p className="name2">Bryan Runnels </p> 
            <p id="personalQuote"> “Be mindful. Be grateful. Be positive. Be true. Be kind.” - Roy T. Bennett </p>
            <p className="name2"> Fullstack Developer </p>
        </section>
        <nav className="website-menu">           
            <button> <a className="navbar" href="about.html">About</a> </button>
            <button> <a className="navbar" href="index.html"> Home </a> </button>
            <button> <a className="navbar" href="portfolio.html">Portfolio</a> </button>
        </nav>
    </header>
    )
}

export default HomeHeader;