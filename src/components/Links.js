import React from "react";

function Links(){
    return(
        <section id="links">
            <div className="container container-fluid border-top">
                <div className="row">
                    {/* <!-- first column  --> */}
                    <div className="col-12 col-sm-6 col-md-3 mb-5">
                        {/* <!--<img
                            className="mb-3"
                            src="./img/brand__logo.png"
                            alt="brand icon"
                        />--> */}
                       {/* <!-- <div
                            className="
                                text-white text-center text-uppercase
                                start__min
                            "
                        >
                            start minting
                        </div>--> */}
                    </div>
                    {/* <!-- first column  --> */}
                    <div className="col-12 col-sm-6 col-md-3 mb-5">
                        <h5 className="text-white text-capitalize">navigation</h5>
                        {/* <!-- lists  --> */}
                        <ul className="list-group">
                            <li className="list-group-item bg-transparent">
                                <a
                                    href="#suburban__NFT"
                                    className="
                                        para
                                        text-center
                                        para
                                        text-white text-capitalize
                                    "
                                    >about</a
                                >
                            </li>
                            <li className="list-group-item bg-transparent">
                                <a
                                    href="#roadmap"
                                    className="
                                        para
                                        text-center
                                        para
                                        text-white text-capitalize
                                    "
                                    >roadmap</a
                                >
                            </li>
                            <li className="list-group-item bg-transparent">
                                <a
                                    href="#faq"
                                    className="
                                        para
                                        text-center
                                        para
                                        text-white text-capitalize
                                    "
                                    >FAQ</a
                                >
                            </li>
      
                           {/* <!-- <li className="list-group-item bg-transparent">
                                <a
                                    href=""
                                    className="
                                        para
                                        text-center
                                        para
                                        text-white text-capitalize
                                    "
                                    >buy suburbans (coming soon)</a
                                >
                            </li>--> */}
                        </ul>
                    </div>
                    {/* <!-- secound column  --> */}
   
                    {/* <!-- third column  --> */}
                    <div className="col-12 col-sm-6 col-md-3">
                        <h5
                            className="
                                text-center
                                text-md-left
                                text-white
                                text-capitalize
                            "
                        >
                            connect
                        </h5>
                        {/* <!-- lists  --> */}
                        <ul className="list-group">
                            <div className="link__list">
                                <a href="https://twitter.com/suburbancolors" className="text icon"><i className="fab fa-twitter"></i></a>
                                <a href="https://www.instagram.com/suburban.colors/" className="text icon"><i className="fab fa-instagram"></i></a>
                                <a href="https://discord.gg/XgHhwZtKCg" className="text icon"><i className="fab fa-discord"></i></a>
                            </div>
                        </ul>
                    </div>
                </div>
                                
            </div>
        </section>
    );
}

export default Links;