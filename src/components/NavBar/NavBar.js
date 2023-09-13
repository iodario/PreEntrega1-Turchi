




const NavBar = ({ logo }) => {
    return(
        <>
       
        <nav className="navbar is-link" role="navigation" aria-label="main navigation">
            <div className="navbar-brand">  
                    <img src={logo} width="112" height="112" alt="" />
                <a role="button" className="navbar-burger" aria-label="menu" aria-expanded="false" data-target="navbarBasicExample" href="a">
                    <span aria-hidden="true"></span>
                    <span aria-hidden="true"></span>
                    <span aria-hidden="true"></span>
                </a>
            </div>

            <div id="navbarBasicExample" className="navbar-menu">
                <div className="navbar-start">
                    <a className="navbar-item" href="a">
                        Home
                    </a>

                    <a className="navbar-item" href="a">
                        Documentation
                    </a>

                    <div className="navbar-item has-dropdown is-hoverable">
                        <a className="navbar-link" href="a">
                            More
                        </a>

                        <div className="navbar-dropdown">
                            <a className="navbar-item" href="a">
                                About
                            </a>
                            <a className="navbar-item" href="a">
                                Jobs
                            </a>
                            <a className="navbar-item" href="a">
                                Contact
                            </a>
                            <hr className="navbar-divider" />
                            <a className="navbar-item" href="a">
                                Report an issue
                            </a>
                        </div>
                    </div>
                </div>

                <div className="navbar-end">
                    <div className="navbar-item">
                        <div className="buttons">
                            <a className="button is-primary" href="a">
                                <strong>Sign up</strong>
                            </a>
                            <a className="button is-light" href="a">
                                Log in
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </nav>
        </>
    )
       
    
}

export default NavBar;