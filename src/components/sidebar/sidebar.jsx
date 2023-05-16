import React, { useState } from "react";
import "./sidebar.css";
import Logo from "../../assets/logo.svg"

const Sidebar = () => {
    const [toggle, showMenu] = useState(false);
    return (
        <>
            <aside className={toggle ? "aside show-menu" : "aside"}>
                <a href="#home" className="nav__logo">
                    <img src={Logo} alt="" />
                </a>
                <nav className="nav">
                    <div className="nav__menu">
                        <ul className="nav__list">
                            <li className="nav__item">
                                <a href="#home" className="nav__link">
                                    <i className="icon-home"></i> Accueil
                                </a>
                            </li>
                            <li className="nav__item">
                                <a href="#about" className="nav__link">
                                    <i className="icon-list"></i>  À propos
                                </a>
                            </li>
                            <li className="nav__item">
                                <a href="#services" className="nav__link">
                                    <i className="icon-briefcase"></i> Nos services
                                </a>
                            </li>
                            <li className="nav__item">
                                <a href="#work" className="nav__link">
                                    <i className="icon-grid"></i> Nos projets
                                </a>
                            </li>
                            <li className="nav__item">
                                <a href="#testimonials" className="nav__link">
                                    <i className="icon-graduation"></i> Temoignages
                                </a>
                            </li>
                            <li className="nav__item">
                                <a href="#contact" className="nav__link">
                                    <i className="icon-layers"></i> Contacte
                                </a>
                            </li>
                        </ul>
                    </div>
                </nav>

                <div className="nav__footer">
                    <span className="copyright">&copy; 2022 - 2023</span>
                </div>

            </aside>
            <div className={toggle ? "nav__toggle nav__toggle-open" : "nav__toggle"} onClick={() => showMenu(!toggle)}>
                <i className="icon-menu"></i>
            </div>
        </>

    )
}

export default Sidebar