import React from 'react';

import logo from '../../assets/logonegativo.png';

import './style.css';

export default function Footer(){
    return(
        <div className="footer">
            <div className="content">
                <div className="logo">
                    <img src={logo} alt="Logomarca"/>
                </div>

                <div className="info">
                    <p>
                        Company Inc., 8901 Marmora Road, Glasgow, D04 89GR 
                        <br/>
                        Call us now toll free: (800)2345-6789
                        <br/>
                        Customer support: support@demolink.org
                        <br/>
                        Skype: sample-username
                    </p>
                </div>
            </div>
        </div>
    );
}