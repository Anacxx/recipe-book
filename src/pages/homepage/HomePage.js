import Navbar from "../../components/navbar/Navbar";
import HeroSection from "./herosection/HeroSection";
import "./Homepage.scss";
export default function Homepage(){
    return(
        <>
        <Navbar/>
        <div className="container main">
            <HeroSection/>
        </div>
        </>
    )
}