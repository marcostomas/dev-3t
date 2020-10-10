import React from 'react';
import Header from '../../Components/Header/index';
import Footer from '../../Components/Footer/index';

import cinema from '../../assets/cinema.png';
import dramaComedia from '../../assets/theater.png';

import 'styles.css';

export default function Home(){
    return(
        <div className="homePage">
            <Header />
            
            <main>
                <h1>Monte sua coletânea de filmes...</h1>
                <div className="textArea">
                    <h2>Lorem ipsum dolor sit amet conse ctetur adipisicing elit, sed do eiusmod tempor</h2>

                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt 
                        ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation 
                        ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in 
                        reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur 
                        sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id 
                        est laborum.
                    </p>
                </div>

                <div className="filmes-categoria">
                    <div className="filmes">
                        <img src={cinema} alt="Rolo de filme"/>

                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor 
                            incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud 
                            exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                        </p>
                    </div>
                    
                    <div className="categoria">
                        <img src={dramaComedia} alt="Rostos de drama e comédia"/>

                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor 
                            incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud 
                            exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                        </p>
                    </div>
                </div>
            </main>

            <Footer />
        </div>

    );
}