import chefLogo from "/chef-logo.png"
export default function Header() {
    return (
        <header className="header">
            <img src={chefLogo} alt="Chef Claude Logo" className="chef-logo" />
            <h1 className="title">AI Chef</h1>
        </header>
    )
}