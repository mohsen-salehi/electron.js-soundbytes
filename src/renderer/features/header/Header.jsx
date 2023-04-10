import React from 'react';
import {Link} from "react-router-dom";
import MenuDropDown from "./component/menuDropDown.jsx";

function Header() {
    return (
            <header className="bg-header py-2 border-2 border-bottom">
                <nav className="container p-0">
                    <ul className="col-12 d-flex  m-0 p-0 list-unstyled h6 fw-normal">
                        <li>
                            <Link className="p-3 row justify-content-center align-items-center mx-1" to="">Proppy</Link>
                        </li>
                        <li>
                            <Link className="p-3 row justify-content-center align-items-center mx-1 text-header" to="/proppy/p2p">P2P</Link>
                        </li>
                        <li>
                            <Link className="p-3 row justify-content-center align-items-center mx-1 text-header" to="/proppy/area">Area</Link>
                        </li>
                        <li>
                            <Link className="p-3 row justify-content-center align-items-center mx-1 text-header" to="/proppy/beacon">Beacons</Link>
                        </li>
                        <li>
                            <Link className="p-3 row justify-content-center align-items-center mx-1 text-header" to="/proppy/radcom">RadCom</Link>
                        </li>
                        <li>
                            <Link className="p-3 row justify-content-center align-items-center mx-1 text-header" to="/proppy/planner">Planner</Link>
                        </li>
                        <li>
                            <Link className="p-3 row justify-content-center align-items-center mx-1 text-header" to="/proppy/spaceweather">Space Weather</Link>
                        </li>
                        <li>
                            <Link className="p-3 row justify-content-center align-items-center mx-1 text-header" to="/proppy/swl">SWL</Link>
                        </li>
                        <li className="d-flex justify-content-center align-items-center">
                            <MenuDropDown />
                        </li>
                    </ul>
                </nav>
            </header>

    );
}

export default Header;