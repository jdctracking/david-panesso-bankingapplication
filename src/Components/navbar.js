import React from "react";

function NavBar(){
    const [activate, setActivate] = React.useState("false");
    
    const turnActive = ()=> {setActivate(!activate);};
    
    return(
        <>
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <a className="navbar-brand" href="#">Home</a>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav" id="navbarNavNav">
            <li className={ activate ? "nav-item active":"nav-item"}>
                <a className="nav-link" href="#/CreateAccount/" onClick={turnActive}>Create Account</a>            </li>
            <li className={ activate ? "nav-item active":"nav-item"}>
                <a className="nav-link" href="#/AllData/" onClick={turnActive}>All Data</a>
            </li>
            <li className="nav-item">
                <a className="nav-link" href="#/Deposit/">Deposit</a>
            </li>
            <li className="nav-item">
                <a className="nav-link" href="#/Withdraw/">Withdraw</a>
            </li>
            <li className="nav-item">
                <a className="nav-link" href="#/Balance/">Balance</a>
            </li>
            <li className="nav-item">
                <a className="nav-link" href="#/Login/">Login</a>
            </li>
            </ul>
        </div>
        </nav>
        </>
    );
}
export default NavBar;
