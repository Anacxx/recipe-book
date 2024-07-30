import { useProtectedPage } from "../../hooks/useProtectedPage"
import { useRequestData } from "../../hooks/useRequestData"

export const RecipeDetailsPage = () => {
    useRequestData()
    useProtectedPage()
    return(
        <div>RecipeDetailsPage</div>
    )
}