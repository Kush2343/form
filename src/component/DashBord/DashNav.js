import React from "react";
import { faBorderAll, faNewspaper, faClipboard, faBuildingColumns, faAddressCard, faGear, faArrowRightFromBracket } from '@fortawesome/free-solid-svg-icons';
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function DashNav({ isNavClosed }) {
    return (
        <div className={`navcontainer ${isNavClosed ? "navclose" : ""}`}>
            <nav className="nav">
                <ul className="nav-upper-options">
                <Link to="/dashbord"><li class="nav-option option"><FontAwesomeIcon icon={faBorderAll} className="icn" />Dashboard</li></Link>
                    <Link><li class="nav-option option"><FontAwesomeIcon icon={faNewspaper} className="icn" /> Articles</li></Link>
                    <Link><li class="nav-option option"><FontAwesomeIcon icon={faClipboard} className="icn" />Report</li></Link>
                    <Link><li class="nav-option option"><FontAwesomeIcon icon={faBuildingColumns} className="icn" />Institution</li></Link>
                    <Link to="/profile"> <li class="nav-option option"><FontAwesomeIcon icon={faAddressCard} className="icn" />Profile</li></Link>
                    <Link><li class="nav-option option"><FontAwesomeIcon icon={faGear} className="icn" />Settings</li></Link>
                    <Link><li class="nav-option option"><FontAwesomeIcon icon={faArrowRightFromBracket} className="icn" />Logout</li></Link>
                </ul>
            </nav>
            </div>
    );
}
export default DashNav