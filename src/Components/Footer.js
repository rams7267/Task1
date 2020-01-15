import React from 'react';

function Footer(){

    const items = ['Terms','Privacy','Security','Status','Help','Contact GitHub','Pricing','API','Training','Blog','About']
    return(
        <div className = 'footer'>
            <ul id = 'foot'>
                {items.map(item => {{
                    return <li><a key = {item} href = '#home'>{item}</a></li>
                }})}
            </ul>
        </div>
    );
}

export default Footer;
