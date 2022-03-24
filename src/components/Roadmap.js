import React from "react";
import mouseIcon from '../images/icons/mouse.png';
import checko_Icon from '../images/checko.png';

function Roadmap(){
    return(
        <section id="roadmap">
                        {/* <!-- <div className="container border-bottom"> --> */}
            <div className="container">
                <div>
                    <h1 className="title text-center text-capitalize">
                        Roadmap
                    </h1>
                    <p
                        className="
                            para
                            text-center
                            w-xs-100
                            mx-auto
                            w-sm-70 w-xxl-65
                            mt-3
                        "
                    >
                        Here is what to expect before and after the launch of the SuburbanColors.
                    </p>
                </div>
                {/* <!-- cards section  --> */}
                <ul className="list-group mt-4 mt-lg-5 w-xl-80 mx-xl-auto">
                    <li
                        className="
                            list-group-item
                            d-flex
                            align-items-center
                            mb-4 mb-lg-5
                            rounded
                        "
                    >
                        <h3 className="text-success mb-0 me-3 me-lg-4">Phase 1</h3>
                        <div>
                            Twitter and Discord Early Adopters giveaways. <img src= {checko_Icon} /> <br/>  
                            Initiate the mint of 1024 Rebels at the SuburbanColors website.<img src= {checko_Icon} /><br/>
                            Free mint for the first verified members in Discord.<img src= {checko_Icon} /><br/>
                        </div>
                    </li>
                    <li
                        className="
                            list-group-item
                            d-flex
                            align-items-center
                            mb-4 mb-lg-5
                            rounded
                        "
                    >
                        <h3 className="text-success mb-0 me-3 me-lg-4">Phase 2</h3>
                        <div>
                            NFTs Giveaways in all social media channels. <img src= {checko_Icon} /><br/>
                            Push for verification on Opensea and Twitter. (requested!)<br/>
                            Launch The Hidden Network first event in exclusive for all the holders. <img src= {checko_Icon} /> <br/>
                        </div>
                    </li>
                    <li
                        className="
                            list-group-item
                            d-flex
                            align-items-center
                            mb-4 mb-lg-5
                            rounded
                        "
                    >
                        <h3 className="text-success mb-0 me-3 me-lg-4">Phase 3</h3>
                        <div>
                            Owning 2 or 3 Rebels will get the option to own a 3D print figure file or a new handmade SuburbanColors NFT.<br/>
                            Releasing the mint of our SuburbanRobots with collection of 1175 Robots.<br/>
							Owning Rebels will airdrop you Robots based on the amounts you hold.<br/>
                            Owning a Rebel will grant you Whitelist spot for the Robots collection.<br/>
                            Owning 4x Rebels will airdrop you 2x Robots<br/>
                            Owning 8x Rebels will airdrop you 4x Robots<br/>
                            Owning 12x Rebels will airdrop you 6x Robots<br/>
                        </div>
                    </li>
                    <li
                        className="
                            list-group-item
                            d-flex
                            align-items-center
                            mb-4 mb-lg-5
                            rounded
                        "
                    >
                        <h3 className="text-success mb-0 me-3 me-lg-4">Phase 4</h3>
                        <div>                      
							<br/>
                                Upon reaching 100% of the Robots, a land purchase will start as a home for the Rebels that escape from Robots.<br/>
                                60% of of money derived from buying and selling land will be reward to owners.<br/>
                        </div>
                    </li>
                    <li
                        className="
                            list-group-item
                            d-flex
                            align-items-center
                            mb-4 mb-lg-5
                            rounded
                        "
                    >
                        <h3 className="text-success mb-0 me-3 me-lg-4">Phase 5</h3>
                        <div>                      
							<br/>
                                Hidden network event to discuss next steps:<br/>
                                Bringing our Rebels & Robots alive into the metaverse (bit.country, the game...).<br/>
                                Building stable economy, Rewards and $rebel token.
                        </div>
                    </li>
                </ul>
                {/* <!-- paragraph  --> */}
     
                <a href="#team" className="mouse text-center">
                    <img className="d-inline-block" src={mouseIcon} alt="mouse-icon"/>
                </a>
            </div>
        </section>
    );
}

export default Roadmap;