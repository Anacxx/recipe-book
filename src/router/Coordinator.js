export const GoToLogin = (navigate) => {
    navigate("/login")
}
export const GoToSignup = (navigate) => {
    navigate("/signup")
}
export const goToHome = (navigate) => {
    navigate("/")
}
export const goToNewRecipe = (navigate) => {
    navigate("/newRecipe")
}
export const goToRecipeDetails = (navigate,id) => {
    navigate(`/details/${id}`)
}
export const goToRecipes = (navigate) => {
    navigate("/recipes")
}
export const goToSettings = (navigate) => {
    navigate("/settings")
}