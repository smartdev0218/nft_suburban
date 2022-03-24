import React from "react";
import mouseIcon from '../images/icons/mouse.png';
import sliderImage2 from '../images/aro6.gif';
import sliderImage3 from '../images/ab.gif';

function Plot(){
    return(
        <section id="plot">
            {/* <!-- <div className="container border-bottom"> --> */}
            <div className="container">
                <div className="row justify-content-between align-items-center">
                    {/* <!-- right side  --> */}
                    <div
                        className="col-12 col-lg-6 right__side order-1 pt-5 pt-lg-0"
                    >
                        <div className="btn__style text-white mt-5 p-2">
                            A GRIM FUTURE
                        </div>
                        <h1 className="title mb-3 mb-lg-4">Plot</h1>
                        <p className="para">
                            The year 2199. As one might imagine, the evolution of artificial intelligence has caused it to progress on its own, building robots that went from making human life easier to dominating them, condemning humans to become an inferior lineage under the orders of the robots or flee hiding from them so as not to get annihilated by them. Those who flee, the SuburbanRebels, and to survive, are forced to integrate robotic elements, becoming cyborgs and thus try to combat this threat. 
                        </p>
                        <p className="para">
                            With this plot and a team behind it, we plan to offer different experiences for holders, investors and collectors.
                        </p>

                    </div>
                   
                    <div className="col-12 col-lg-5 left__side order-0">


                        <div
                            id="suburban__carousel"
                            className="carousel slide carousel-fade"
                            data-bs-ride="carousel"
                        >
                            <div className="carousel-inner">
                                <div
                                    className="carousel-item active"
                                    data-bs-interval="4000"
                                >
                                    <img
                                        src={sliderImage2}
                                        className="d-block w-100"
                                        alt="slider image"
                                    />
                                </div>
                                <div
                                    className="carousel-item"
                                    data-bs-interval="4000"
                                >
                                    <img
                                        src={sliderImage3}
                                        className="d-block w-100"
                                        alt="slider image"
                                    />
                                </div>



                            </div>
                        </div>



                    </div>
                </div>
                <a href="#game" className="mouse text-center"
                    ><img
                        className="d-inline-block"
                        src={mouseIcon}
                        alt="mouse-icon"
                /></a>
            </div>
        </section>
    );
}

export default Plot;