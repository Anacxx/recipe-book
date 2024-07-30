import Navbar from "../../components/navbar/Navbar";
import { useRequestData } from "../../hooks/useRequestData";
import HeroSection from "./herosection/HeroSection";
import "./Homepage.scss";
export default function Homepage(){
    useRequestData()
    return(
        <>
        <Navbar/>
        <div className="container main">
            <HeroSection/>
        </div>
        </>
    )
}