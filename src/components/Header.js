import React from "react";

function Header(){
    return(
        <header id="header" className="w-xs-100 bg-dark">
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark py-3 py-lg-4">
                <div className="container-fluid">
                    {/* <!-- social btn for small screen  --> */}
                    <div className="social__btns clearfix d-lg-none">
                            <ul
                                className="
                                    social__wrap
                                    d-flex
                                    justify-content-between
                                    mb-0
                                "
                            >
                                <li>
                                    <a href="https://twitter.com/suburbancolors"
                                        ><i className="fab fa-twitter"></i
                                    ></a>
                                </li>
                                <li>
                                    <a href="https://www.instagram.com/suburban.colors/"
                                        ><i className="fab fa-instagram"></i
                                    ></a>
                                </li>
                                <li>
                                    <a href="https://discord.gg/XgHhwZtKCg"
                                        ><i className="fab fa-discord"></i
                                    ></a>
                                </li>
                            </ul>
                    </div>
                    {/* <!-- navbar btn  --> */}
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse justify-content-lg-end" id="navbarSupportedContent">
                    <ul
                        className="
                            mb-0
                            p-0
                            d-md-flex
                            justify-content-between
                            align-items-center
                            flex-column
                            flex-lg-row
                        "
                    >
                        <li className="nav-item">
                            <a
                                className="nav-link text-uppercase text-center text-white"
                                href="#suburban__NFT"
                                >about</a
                            >
                        </li>
							<li className="nav-item">
                            <a
                                className="nav-link text-uppercase text-center text-white"
                                href="#plot"
                                >plot</a
                            >
                        </li>
						  <li className="nav-item">
                            <a
                                className="nav-link text-uppercase text-center text-white"
                                href="#game"
                                >game</a
                            >
                        </li>
						  <li className="nav-item">
                            <a
                                className="nav-link text-uppercase text-center text-white"
                                href="#rarity"
                                >traits</a
                            >
                        </li>							
                        <li className="nav-item">
                            <a
                                className="nav-link text-uppercase text-center text-white"
                                href="#roadmap"
                                >roadmap</a
                            >
                        </li>
                        <li className="nav-item">
                            <a
                                className="nav-link text-uppercase text-center text-white"
                                href="#team"
                                >team</a
                            >
                        </li>
                        <li className="nav-item me-lg-5">
                            <a
                                className="nav-link text-uppercase text-center text-white"
                                href="#faq"
                                >faq</a
                            >
                        </li>
						  {/* <!--<li className="d-none d-md-block">
                            <a
                                className="text-uppercase text-center text-white"
                                href=""
                                >My wallet</a
                            > 
                        </li>--> */}
                        {/* <!-- social btns  --> */}
                        <li className="social__btns clearfix d-none d-lg-block">
                            <ul
                                className="
                                    social__wrap
                                    d-flex
                                    justify-content-between
                                "
                            >
                                <li>
                                    <a href="https://twitter.com/suburbancolors"
                                        ><i className="fab fa-twitter"></i
                                    ></a>
                                </li>
                                <li>
                                    <a href="https://www.instagram.com/suburban.colors/"
                                        ><i className="fab fa-instagram"></i
                                    ></a>
                                </li>
                                <li>
                                    <a href="https://discord.gg/XgHhwZtKCg"
                                        ><i className="fab fa-discord"></i
                                    ></a>
                                </li>
                            </ul>
                        </li>
                    </ul>
                    </div>
                </div>
                </nav>
        </header>
    );
}

export default Header;