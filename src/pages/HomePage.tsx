import { useNavigate } from "react-router-dom";
import "./HomePage.css";
import HomeNavbar from "../components/HomeNavbar";
import HomeSlides from "../components/HomeSlides";
import HomeList from "../components/HomeList";



const HomePage = () => {
    
    return (
        <div>
            <HomeNavbar></HomeNavbar>
             <div className="container my-5">
                <HomeSlides></HomeSlides>
                <HomeList></HomeList>
            </div>
        </div>

    );
};

export default HomePage;

