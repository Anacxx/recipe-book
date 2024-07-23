import { useState } from "react"
import { faHome, faList, faCog, faUtensilSpoon, faUser } from '@fortawesome/free-solid-svg-icons';
import Sidebar from "../sidebar/Sidebar"
export default function Navbar(){
    const [showSidebar, setShowSidebar] = useState(false)
    const links = [
        {
            name: 'Home',
            path: '/',
            icon: faHome
        },
        {
            name: 'Recipes',
            path: '/recipes',
            icon: faList
        },
        {
            name: 'New Recipe',
            path: '/newRecipe',
            icon: faUtensilSpoon
        },
        {
            name: 'Settings',
            path: '/settings',
            icon: faCog
        },
        {
            name: 'Login',
            path: '/login',
            icon: faUser
        }
    ]
    function closeSidebar(){
        setShowSidebar(false)
    }
    return(
        <>
            <div className="navbar container">
                <a href="#!" className="logo">LoveC<span>oo</span>k</a>
                <div className="nav-links">
                    { links.map(link => (
                        <a href="#!" key={link.name}>{link.name}</a>
                    ))}
                {/* <a href="#!">Home</a>
                    <a href="#!">Recipes</a>
                    <a href="#!">Settings</a> */}
                </div>
                <div onClick= {() => setShowSidebar(true) }className={showSidebar? "sidebar-btn active" : "sidebar-btn"} >
                    <div className="bar"></div>                
                    <div className="bar"></div>
                    <div className="bar"></div>
                </div>
            </div>
            { showSidebar && <Sidebar close = {closeSidebar} links={links}/> }
        </>
    )
}