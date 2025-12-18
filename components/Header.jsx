import React from "react"
import chefLogo from "/chef-logo.png"
export default function Header() {

    const [isDark, setIsDark] = React.useState(false);
    
    function toggleDarkmode(){
        document.body.classList.toggle("dark-mode")
        setIsDark(!isDark)

    }

    return (
        <header className="header">
            <img src={chefLogo} alt="Chef Claude Logo" className="chef-logo" />
            <h1 className="title">AI Chef</h1>
            <button className="light-dark"
                    onClick={toggleDarkmode}
            >{isDark ? "🌞 Light Mode" : "🌙 Dark Mode"}
            </button>
        </header>
    )
}