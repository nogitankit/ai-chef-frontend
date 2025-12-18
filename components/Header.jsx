import chefLogo from "/chef-logo.png"
export default function Header() {

    function toggleDarkmode(){
        document.body.classList.toggle("dark-mode")
    }

    return (
        <header className="header">
            <img src={chefLogo} alt="Chef Claude Logo" className="chef-logo" />
            <h1 className="title">AI Chef</h1>
            <button className="light-dark"
                    onClick={toggleDarkmode}
            >light-mode
            </button>
        </header>
    )
}