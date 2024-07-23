import {BrowserRouter, Routes, Route} from "react-router-dom";
import { LoginPage } from "../pages/loginPage/LoginPage";
import { RecipeDetailsPage } from "../pages/recipeDetailsPage/RecipeDetailsPage";
import { RecipesPage } from "../pages/recipesPage/RecipesPage";
import { SettingsPage } from "../pages/settingsPage/SettingsPage";
import { SignupPage } from "../pages/signupPage/SignupPage";
import Homepage from "../pages/homepage/HomePage";
import { ErrorPage } from "../pages/errorPage/ErrorPage";
import { NewRecipePage } from "../pages/newRecipePage/NewRecipePage";
export const Router = () => {
    return(
        <BrowserRouter>
            <Routes>
                <Route path="/" element = {<Homepage/>}/>
                <Route path="/login" element = {<LoginPage/>}/>
                <Route path="/signup" element = {<SignupPage/>}/>
                <Route path="/newRecipe" element = {<NewRecipePage/>}/>
                <Route path="/details/:id" element = {<RecipeDetailsPage/>}/>
                <Route path="/recipes" element = {<RecipesPage/>}/>
                <Route path="/settings" element = {<SettingsPage/>}/>
                <Route path="*" element = {<ErrorPage/>}/>
            </Routes>
        </BrowserRouter>
    )
}