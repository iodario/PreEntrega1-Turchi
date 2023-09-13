import CartWidget from "../CartWidget/CartWidget";

const NavBar = ({ logo }) => {
    return(
        <>
       
        <nav className="navbar is-warning" role="navigation" aria-label="main navigation">
            <div className="navbar-brand">  
                    <img src={logo} width="112" height="112" alt="" />
                <a role="button" className="navbar-burger" aria-label="menu" aria-expanded="false" data-target="navbarBasicExample" href="a">
                    <span aria-hidden="true"></span>
                    <span aria-hidden="true"></span>
                    <span aria-hidden="true"></span>
                </a>
            </div>

            <div id="navbarBasicExample" className="navbar-menu">
                <div className="navbar-start title is-size-4" >
                    <a className="navbar-item " href="a" >
                        Home
                    </a>
                    <a className="navbar-item" href="a">
                        Nuestros Productos
                    </a>
                    <a className="navbar-item" href="a">
                        Nuestros Servicios
                    </a>
                    <div className="navbar-item has-dropdown is-hoverable">
                        <a className="navbar-link" href="a">
                            Mas
                        </a>

                        <div className="navbar-dropdown">
                            <a className="navbar-item" href="a">
                                Acerca de
                            </a>
                            <a className="navbar-item" href="a">
                                Trabaja con nosotros
                            </a>
                            <a className="navbar-item" href="a">
                                Contacto
                            </a>
                            <hr className="navbar-divider" />
                            <a className="navbar-item" href="a">
                                Reportar un problema
                            </a>
                        </div>
                    </div>
                </div>

                <div className="navbar-end">
                <CartWidget/>
                    <div className="navbar-item">                   
                        <div className="buttons">                           
                            <a className="button is-primary" href="a">
                                <strong>Sign Up</strong>
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