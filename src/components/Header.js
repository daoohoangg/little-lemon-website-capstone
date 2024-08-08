import React from "react";
import { Link } from "react-router-dom";

function Header(){
    return(
        <header className="header">
            <section>
                <div className="banner">
                    <h2>Little Lemon Restaurant</h2>
                    <h3>Chicago</h3>
                    <p>These resources provide some more in-depth information on the topics covered in this module.</p>
                    <Link to="/booking"><button aria-label="On Click">Reserve Table</button></Link>
                </div>

                <div className="banner-img">
                    <img src="img/restauranfood.jpg" alt="banner in here"></img>
                </div>
            </section>
        </header>
    )
}

export default Header;