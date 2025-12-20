import React from "react"
import chefLogo from "/chef-logo.png"

export default function Header() {
    // 1. Initialize state by checking localStorage first
    const [isDark, setIsDark] = React.useState(() => {
        return localStorage.getItem("theme") === "dark"
    });

    // 2. Sync the body class and localStorage whenever isDark changes
    React.useEffect(() => {
        if (isDark) {
            document.body.classList.add("dark-mode");
            localStorage.setItem("theme", "dark");
        } else {
            document.body.classList.remove("dark-mode");
            localStorage.setItem("theme", "light");
        }
    }, [isDark]);

    function toggleDarkmode() {
        setIsDark(prevMode => !prevMode);
    }

    return (
        <header className="header">
            <img src={chefLogo} alt="Chef Claude Logo" className="chef-logo" />
            <h1 className="title">AI Chef</h1>
            <button 
                className="light-dark"
                onClick={toggleDarkmode}
                aria-label="Toggle dark mode"
            >
                {isDark ? <img className="toggle" src="/sun.png" alt="Light Mode" /> : <img className="toggle" src="/moon.png" alt="Dark Mode" />}
            </button>
        </header>
    )
}