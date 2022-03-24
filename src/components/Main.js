import React from 'react';
import '../css/style.css'
import Header from './Header';
import MainSection from './MainSection';
import Wallet from './Wallet';
import SuburbanNFT from './SuburbanNFT';
import Plot from './Plot';
import Game from './Game';
import Rarity from './Rarity';
import Benefit from './Benefit';
import Roadmap from './Roadmap';
import Team from './Team';
import Faq from './Faq';
import Links from './Links';
import Footer from './Footer';
import Dashboard from './Dashboard';

function Main(){
    return(
        <div>    
            <body>
                {/* <!-- header navbar  --> */}
                <Header/>
                
                {/* <!-- main section  --> */}
                <MainSection/>

                {/* <!--wallet  --> */}
                {/* <Wallet/> */}

                 {/* <!-- 1st section  --> */}
                {/* <Dashboard/> */}

                {/* <!-- 2nd section  --> */}
                <SuburbanNFT/>


                {/* <!-- 3rd section  --> */}
                <Plot/>
		
		
	            {/* <!-- 2nd section  --> */}
        	    <Game/>
		

                {/* <!-- 2nd section  --> */}
                {/* <!-- 3rd section  --> */}
                <Rarity/>


                {/* <!-- 4th section  --> */}
                <Benefit/>


                {/* <!-- 2021 roadmap section  --> */}
                <Roadmap/>


                {/* <!-- team section  --> */}
                <Team/>

                
                {/* <!-- faq section  --> */}
                <Faq/>


                {/* <!-- link list section  --> */}
                <Links/>


                {/* <!-- footer section  --> */}
                <Footer/>
            </body>
        </div>
    )
}
export default Main;
        
