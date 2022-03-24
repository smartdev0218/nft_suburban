import React from "react";
import mouseIcon from '../images/icons/mouse.png';
import team1 from '../images/608k.gif';
import team2 from '../images/164k.gif';
import team3 from '../images/296k.gif';
import team4 from '../images/158k.gif';
import team5 from '../images/802k.gif';
import team6 from '../images/283k.gif';
import team7 from '../images/298k.gif';

function Team(){
    return(
        <section id="team">
                        {/* <!-- <div className="container border-bottom"> --> */}
            <div className="container">
                <div className="sec__header">
                    <h1 className="title text-center text-capitalize">
                        meet the team
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
                        Our core team has a professional design, marketing as well as blockchain development.
                    </p>
                </div>
                {/* <!-- team list  --> */}
                <div
                    className="
                        team__member
                        card__list
                        d-flex
                        flex-wrap
                        justify-content-center justify-content-sm-between
                        mt-4 mt-lg-5
                    "
                >
                    {/* <!-- cards  --> */}
                    <div
                        className="
                            card
                            w-xs-90 w-sm-48 w-lg-40
                            d-flex
                            flex-column
                            align-items-center
                            mb-4 mb-lg-5
                        "
                    >
                       <div className="img__wrap">
                            <img
                                src= {team1}
                                className="card-img-top"
                                alt="card image"
                            />
                        </div>
                        <div className="card-body p-0">
                            <h5 className="card-title text-center text-white">
                                Rukisan
                            </h5>
                            <h6 className="text-center text-capitalize text-white">
                                manager
                            </h6>
                            <p
                                className="
                                    card-text
                                    text-center
                                    w-xs-95 w-sm-100
                                    mx-auto
                                "
                            >
                                Product
                            </p>
                            <a
                                href="https://twitter.com/rukesan4"
                                className="text-white d-block mx-auto"
                                style={{width: "35px"}}
                            >
                                <i className="fab fa-twitter"></i>
                            </a>
                        </div>
                    </div>
                    {/* <!-- cards  --> */}
                    <div
                        className="
                            card
                            w-xs-90 w-sm-48 w-lg-40
                            d-flex
                            flex-column
                            align-items-center
                            mb-4 mb-lg-5
                        "
                    >
                       <div className="img__wrap">
                            <img
                                src= {team2}
                                className="card-img-top"
                                alt="card image"
                            />
                        </div>
                        <div className="card-body p-0">
                            <h5 className="card-title text-center text-white">
                                Rodri
                            </h5>
                            <h6 className="text-center text-capitalize text-white">
                                artist
                            </h6>
                            <p
                                className="
                                    card-text
                                    text-center
                                    w-xs-95 w-sm-100
                                    mx-auto
                                "
                            >
                                Design
                            </p>
                            <a
                                href="https://twitter.com/zptvrd"
                                className="text-white d-block mx-auto"
                                style={{width: "35px"}}
                            >
                                <i className="fab fa-twitter"></i>
                            </a>
                        </div>
                    </div>
                    {/* <!-- cards  --> */}
                    <div
                        className="
                            card
                            w-xs-90 w-sm-48 w-lg-40
                            d-flex
                            flex-column
                            align-items-center
                            mb-4 mb-lg-5
                        "
                    >
                       <div className="img__wrap">
                            <img
                                src= {team3}
                                className="card-img-top"
                                alt="card image"
                            />
                        </div>
                        <div className="card-body p-0">
                            <h5 className="card-title text-center text-white">
                                Trollinghotshot
                            </h5>
                            <h6 className="text-center text-capitalize text-white">
                                manager
                            </h6>
                            <p
                                className="
                                    card-text
                                    text-center
                                    w-xs-95 w-sm-100
                                    mx-auto
                                "
                            >
                                Marketing
                            </p>
                            <a
                                href="https://twitter.com/kitoyvelasquez"
                                className="text-white d-block mx-auto"
                                style={{width: "35px"}}
                            >
                                <i className="fab fa-twitter"></i>
                            </a>
                        </div>
                    </div>
                    {/* <!-- cards  --> */}
                    <div
                        className="
                            card
                            w-xs-90 w-sm-48 w-lg-40
                            d-flex
                            flex-column
                            align-items-center
                            mb-4 mb-lg-5
                        "
                    >
                       <div className="img__wrap">
                            <img
                                src= {team4}
                                className="card-img-top"
                                alt="card image"
                            />
                        </div>
                        <div className="card-body p-0">
                            <h5 className="card-title text-center text-white">
                                SyndicateNL
                            </h5>
                            <h6 className="text-center text-capitalize text-white">
                                Manager
                            </h6>
                            <p
                                className="
                                    card-text
                                    text-center
                                    w-xs-95 w-sm-100
                                    mx-auto
                                "
                            >
                                Partnerships
                            </p>
                            {/* <a
                                href="https://twitter.com/maraadlpn"
                                className="text-white d-block mx-auto"
                                style={{width: "35px"}}
                            >
                                <i className="fab fa-twitter"></i>
                            </a> */}
                        </div>
                    </div>
                    {/* <!-- cards  --> */}
                    {/* <!-- cards  --> */}
                    <div
                        className="
                            card
                            w-xs-90 w-sm-48 w-lg-40
                            d-flex
                            flex-column
                            align-items-center
                            mb-4 mb-lg-5
                        "
                    >
                       <div className="img__wrap">
                            <img
                                src= {team5}
                                className="card-img-top"
                                alt="card image"
                            />
                        </div>
                        <div className="card-body p-0">
                            <h5 className="card-title text-center text-white">
                                Muha
                            </h5>
                            <h6 className="text-center text-capitalize text-white">
                                dev
                            </h6>
                            <p
                                className="
                                    card-text
                                    text-center
                                    w-xs-95 w-sm-100
                                    mx-auto
                                "
                            >
                                Blockchain
                            </p>
                            {/* <a
                                href="https://www.linkedin.com/in/muhammad-ubaid-9a1b21169/"
                                className="text-white d-block mx-auto"
                                style={{width: "35px"}}
                            >
                                <i className="fab fa-twitter"></i>
                            </a> */}
                        </div>
                    </div>
                    {/* <!-- cards  --> */}
					
					
					                    {/* <!-- cards  --> */}
                    <div
                        className="
                            card
                            w-xs-90 w-sm-48 w-lg-40
                            d-flex
                            flex-column
                            align-items-center
                            mb-4 mb-lg-5
                        "
                    >
                       <div className="img__wrap">
                            <img
                                src= {team6}
                                className="card-img-top"
                                alt="card image"
                            />
                        </div>
                        <div className="card-body p-0">
                            <h5 className="card-title text-center text-white">
                                Mara
                            </h5>
                            <h6 className="text-center text-capitalize text-white">
                                Social
                            </h6>
                            <p
                                className="
                                    card-text
                                    text-center
                                    w-xs-95 w-sm-100
                                    mx-auto
                                "
                            >
                                Community
                            </p>
                            <a
                                href="https://twitter.com/kitoyvelasquez"
                                className="text-white d-block mx-auto"
                                style={{width: "35px"}}
                            >
                                <i className="fab fa-twitter"></i>
                            </a>
                        </div>
                    </div>
                    {/* <!-- cards  --> */}
					
										                    {/* <!-- cards  --> */}
                    <div
                        className="
                            card
                            w-xs-90 w-sm-48 w-lg-40
                            d-flex
                            flex-column
                            align-items-center
                            mb-4 mb-lg-5
                        "
                    >
                       <div className="img__wrap">
                            <img
                                src= {team7}
                                className="card-img-top"
                                alt="card image"
                            />
                        </div>
                        <div className="card-body p-0">
                            <h5 className="card-title text-center text-white">
                                Ivan
                            </h5>
                            <h6 className="text-center text-capitalize text-white">
                                Game
                            </h6>
                            <p
                                className="
                                    card-text
                                    text-center
                                    w-xs-95 w-sm-100
                                    mx-auto
                                "
                            >
                                Gameplay design
                            </p>
                            {/* <!--<a
                                href=""
                                className="text-white d-block mx-auto"
                                style="width: 35px"
                            >
                                <i className="fab fa-twitter"></i>
                            </a>--> */}
                        </div>
                    </div>
                    {/* <!-- cards  --> */}
					
					
                                        {/* <!-- cards  --> */}
                    <div
                        className="
                            card
                            w-xs-90 w-sm-48 w-lg-40
                            d-flex
                            flex-column
                            align-items-center
                            mb-4 mb-lg-5
                        "
                    >
                       {/* <!--  <div className="img__wrap">
                            <img
                                src="./img/character image/raphael.png"
                                className="card-img-top"
                                alt="card image"
                            />
                        </div>--> */}
                        <div className="card-body p-0">
                            <h5 className="card-title text-center text-white">
                                You
                            </h5>
                            <h6 className="text-center text-capitalize text-white">
                                friend
                            </h6>
                            <p
                                className="
                                    card-text
                                    text-center
                                    w-xs-95 w-sm-100
                                    mx-auto
                                "
                            >
                                Supporter
                            </p>
                           {/* <!-- <a
                                href=""
                                className="text-white d-block mx-auto"
                                style="width: 35px"
                            >
                                <i className="fab fa-twitter"></i>
                            </a>--> */}
                        </div>
                    </div>
                    {/* <!-- cards  --> */}
                    {/* <!-- cards  --> */}

                </div>
                <a href="#faq" className="mouse text-center"
                    ><img
                        className="d-inline-block"
                        src={mouseIcon}
                        alt="mouse-icon"
                /></a>
            </div>
        </section>
    );
}

export default Team;