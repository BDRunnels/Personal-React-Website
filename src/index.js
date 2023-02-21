import { createRoot } from "react-dom/client";
import Header from "./components/Header";
import Footer from "./components/Footer";
import { HomeBody, AboutBody, PortfolioBody } from "./components";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";


const Homepage = () => {
    return (
        <BrowserRouter>
            <div>
                <Header />

                <Routes>
                    <Route path="/about" element={<AboutBody />} />
                    <Route path="/" element={<HomeBody />} />
                    <Route path="/portfolio" element={<PortfolioBody />} />
                </Routes>

                <Footer />
            </div>
        </BrowserRouter>
    )
}

createRoot(document.getElementById("app")).render(<Homepage />)