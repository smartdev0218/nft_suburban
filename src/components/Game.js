import React from "react";
import mouseIcon from '../images/icons/mouse.png';
import sliderImage4 from '../images/processed3.jpg';
import sliderImage5 from '../images/processed4.jpg';
function Game(){
    return(
        <section id="game">
            {/* <!-- <div className="container border-bottom"> --> */}
            <div className="container">
                <div className="row justify-content-between align-items-center">
                    {/* <!-- right side  --> */}
                    <div
                        className="col-12 col-lg-6 right__side order-1 pt-5 pt-lg-0"
                    >
                        <div
                            className="btn__style text-white mb-1 mb-lg-2 text-left"
                        >
                            THE GAME
                        </div>
                        <h1 className="title mb-3 mb-lg-4">Play-to-earn</h1>
                        <p className="para">
                            The game will be a cyberpunk play-to-earn multiplayer game with skill-based-action battles against other players and robots. The aim of the game is to involve the player in a game environment that is directly connected and characterized by the SuburbanColors collection. The idea is to give the player the opportunity to explore the background narrative and be part of it, impersonating his unique cyborg character.
                        </p>
                        <p className="para">
                            By logging into the game, the player will be able to keep an eye on his progress and customize his game experience thanks to the elements he has unlocked (icons, characters, backgrounds, weapons, etc.).
                            While in game, the player will test his skills as a strategist, with medium-fast game rhythms. But also the ability of him in direct battles against enemies. He will have to organize the resources to anticipate his opponents and survive to the end, to win and earn rewards.
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
                                    data-bs-interval="4000"
                                >
                                    <img
                                        src={sliderImage4}
                                        className="d-block w-100"
                                        alt="slider image"
                                    />
                                </div>
                                <div
                                    className="carousel-item"
                                    data-bs-interval="4000"
                                >
                                    <img
                                        src={sliderImage5}
                                        className="d-block w-100"
                                        alt="slider image"
                                    />
                                </div>



                            </div>
							
							
							
							
                        </div>
                    </div>
                </div>
                <a href="#rarity" className="mouse text-center"
                    ><img
                        className="d-inline-block"
                        src={mouseIcon}
                        alt="mouse-icon"
                /></a>
            </div>
        </section>
    );
}

export default Game;