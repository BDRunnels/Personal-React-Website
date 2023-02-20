import { createRoot } from "react-dom/client";
import HomeHeader from "./components/Home_Header";
import HomeBody from "./components/Home_Body";
import HomeFooter from "./components/Home_Footer";


const Homepage = () => {
    return (
        <div>
            <HomeHeader />
            <HomeBody />
            <HomeFooter />
        </div>
    )
}

createRoot(document.getElementById("app")).render(<Homepage />)