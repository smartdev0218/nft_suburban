import React from "react";
import mouseIcon from '../images/icons/mouse.png';
import sliderImage from '../images/a.gif';
import sliderImage1 from '../images/aro7d.gif';

function SuburbanNFT(){
    return(
        <section id="suburban__NFT">
            {/* <!-- <div className="container border-bottom"> --> */}
            <div className="container">
                <div className="row justify-content-between align-items-center">
                <a href="#plot" className="mouse text-center"
                            ><img
                                className="d-inline-block"
                                src={mouseIcon}
                                alt="mouse-icon"
                        /></a>
                    {/* <!-- right side  --> */}
                    <div
                        className="col-12 col-lg-6 right__side order-1 pt-5 pt-lg-0"
                    >
                        
                        <div
                            className="btn__style text-white mb-1 mb-lg-2 text-left"
                        >
                            THE COLLECTION
                        </div>
                        {/* <h1 className="title mb-3 mb-lg-4">Suburban NFTs</h1> */}
                        <p className="para">
                            SuburbanColors is a collection of 2199 pieces of cyberpunk art and utility. The goal of 
                            the collection is to provide entertainment and to reward holders as much as possible.
                             {/* <!--In this first generation, we aim to create a decentraliced NFT Real Estate for the benefit of all the owners. --> */}
                        </p>
                        <p className="para">
                            The collection consists of different categories of Rebels and Robots. The pieces can be 
                            obtained by mint on a given date or in OpenSea. Max 3 mints per transaction, no limit 
                            per wallet. 
                        </p>
                        <p className="para">
                            The first launch of the collection of 1024 Rebels is SOLD OUT. <br/><br/>
							The second and last launch of 1175 Robots mint date will be on April 7, 2022. Currently there 
                            is a Whitelist: <br/>
							-By purchasing 1 Rebel NFT in OpenSea you are automatically whitelisted for the Robots 
                            collection. <br/>
							-For big boys: by purchasing 4 Rebels in Opensea you get 2 Robots, with 8 you get 4 Robots 
                            and with 12 you get 6 Robots. <br/><br/>
                            To get your WL role, join the <a href = "https://discord.gg/na4EtghJ8J" target = "_blank">SuburbanColors Discord.</a>
                        </p>
                    </div>
                    {/* <!-- left side  --> */}
                    <div className="col-12 col-lg-5 left__side order-0 order-lg-3">


                        <div
                            id="suburban__carousel"
                            className="carousel slide carousel-fade"
                            data-bs-ride="carousel"
                        >
                            <div className="carousel-inner">
                                <div
                                    className="carousel-item active"
                                    data-bs-interval="2000"
                                >
                                    <img
                                        src={sliderImage}
                                        className="d-block w-100"
                                        alt="slider image"
                                    />
                                </div>
                                 <div
                                    className="carousel-item"
                                    data-bs-interval="4000"
                                >
                                    <img
                                        src={sliderImage1}
                                        className="d-block w-100"
                                        alt="slider image"
                                    />
                                </div>



                            </div>
                        </div>
                    </div>
                </div>
                <a href="#plot" className="mouse text-center"
                    ><img
                        className="d-inline-block"
                        src={mouseIcon}
                        alt="mouse-icon"
                /></a>
            </div>
        </section>
    );
}

export default SuburbanNFT;