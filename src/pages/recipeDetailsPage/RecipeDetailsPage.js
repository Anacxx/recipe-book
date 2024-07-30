import { useProtectedPage } from "../../hooks/useProtectedPage"
// import { useRequestData } from "../../hooks/useRequestData"

export const RecipeDetailsPage = () => {
    useProtectedPage()
    // useRequestData()

    return(
        <div>RecipeDetailsPage</div>
    )
}