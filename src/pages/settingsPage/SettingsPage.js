import { useProtectedPage } from "../../hooks/useProtectedPage"

export const SettingsPage = () =>{
    useProtectedPage()
    return(
        <div>Settings Page</div>
    )
}