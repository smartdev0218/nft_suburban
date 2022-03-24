import React from "react";
import mouseIcon from '../images/icons/mouse.png';
import gif3web4 from '../images/gif3web4.gif'

function Rarity(){
    return(
        <section id="rarity">
                        {/* <!-- <div className="container border-bottom"> --> */}
            <div className="container">
                <div className="row justify-content-between align-items-center">
                    {/* <!-- right side  --> */}
                    <div
                        className="col-12 col-lg-6 right__side order-1 pt-5 pt-lg-0"
                    >
                        <div className="btn__style text-white mt-5 p-2">
                            THE TRAITS
                        </div>
                        <h1 className="title mb-3 mb-lg-4">Categories</h1>
                        <p className="para">
                            SuburbanColors is divided into 2199 humans, cyborgs and robots. First launch consist of 1024
                             NFTs made as follows: <br/>
                            {/* 0NFTs of Asimov-X, the Android 1<br/>
                            0 NFTs of Goostman-787, the Android 2<br/> */}
                            511 NFTs of Saoirse, the Cyborg female.<br/>
                            510 NFTs of Syfer Klynes Harbisson, the Cyborg male.<br/>
                        </p>
                        <p className="para">
                            Second launch consist in 1175 SuburbanRobots: Asimov-X, Goostman-787, CRÖN-OS4ØØ, Metatron,
                             Kasparov, S.A.M., Agent-X, Commander, Alfons, Seldon-1021 and 3 legendary Robots. Whitelist
                              is open. <br/>
                            There are dozens of different categorized traits with its percentage of chances of being mint.
                            <br/>
							If interested in rarity, you can check the collection in <a href="https://rarity.tools/suburbancolors-collection/" target="_blank">Rarity.tools</a> or <a href="https://raritysniper.com/suburbancolors" target="_blank">Raritysniper</a>
                        </p>

                    </div>
                    {/* <!-- left side  --> */}
                    <div className="col-12 col-lg-5 left__side order-0">


                        <div
                            id="suburban__carousel"
                            className="carousel slide carousel-fade"
                            data-bs-ride="carousel"
                        >
						<div className="carousel-inner3">
                            <img
                                className="w-100"
                                src={gif3web4}
                                alt=""
                            />
							</div>
							</div>



                    </div>
                </div>
                <a href="#benefiit" className="mouse text-center"
                    ><img
                        className="d-inline-block"
                        src={mouseIcon}
                        alt="mouse-icon"
                /></a>
            </div>
        </section>
    );
}
export default Rarity;