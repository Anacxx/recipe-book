import { BASE_URL } from "../../constants/BaseUrl"
import { useRequestData } from "../../hooks/useRequestData"

export const RecipesPage = () => {
    const allRecipes = useRequestData(`${BASE_URL}/recipes`, [])
    console.log(allRecipes)
    return(
        <div>RecipesPage</div>
    )
}