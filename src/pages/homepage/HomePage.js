import Footer from "../../components/footer/Footer";
import Navbar from "../../components/navbar/Navbar";
import RecipeReviewCard from "../../components/recipeReviewCard/RecipeReviewCard";
// import { useRequestData } from "../../hooks/useRequestData";
import HeroSection from "./herosection/HeroSection";
import "./Homepage.scss";
export default function Homepage(){
    // useRequestData()
    return(
        <>
        <Navbar/>
        <div className="container main">
            <HeroSection/>
        </div>
        <div className="recipes">
            <RecipeReviewCard/>
            <RecipeReviewCard/>
            <RecipeReviewCard/>
        </div>
        <Footer/>
        </>
    )
}