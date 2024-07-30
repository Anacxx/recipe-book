import { useProtectedPage } from "../../hooks/useProtectedPage"

export const NewRecipePage = () => { 
    useProtectedPage()
    return(
        <div>NewRecipePage</div>
    )
}