import React, {useState} from 'react';

function Navbar(){

    const [nav2,setNav2] = useState(false);
    
    const items = ['Pull requests','Issues','Marketplace','Explore'];

    return(
        <div>
            <div className = 'navbar2' >
                <svg onClick = {() => setNav2(!nav2)} height="24" className="bars" viewBox="0 0 12 16" version="1.1" width="18" aria-hidden="true" fill = 'white'><path d="M11.41 9H.59C0 9 0 8.59 0 8c0-.59 0-1 .59-1H11.4c.59 0 .59.41.59 1 0 .59 0 1-.59 1h.01zm0-4H.59C0 5 0 4.59 0 4c0-.59 0-1 .59-1H11.4c.59 0 .59.41.59 1 0 .59 0 1-.59 1h.01zM.59 11H11.4c.59 0 .59.41.59 1 0 .59 0 1-.59 1H.59C0 13 0 12.59 0 12c0-.59 0-1 .59-1z"/></svg>
                <svg id = 'logo2' height="24" viewBox="0 0 16 16" version="1.1" width="20%" ><path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0016 8c0-4.42-3.58-8-8-8z"/></svg>
                <svg id="bell2" version="1.1" width="14" height="16" ><path d="M14 12v1H0v-1l.73-.58c.77-.77.81-2.55 1.19-4.42C2.69 3.23 6 2 6 2c0-.55.45-1 1-1s1 .45 1 1c0 0 3.39 1.23 4.16 5 .38 1.88.42 3.66 1.19 4.42l.66.58H14zm-7 4c1.11 0 2-.89 2-2H5c0 1.11.89 2 2 2z"/></svg>
                { nav2 && <div className = 'barmenu'>
                        {items.map(item => {{
                           return <div className = 'sml' key = {item}><a id = 'aa' href = '#home'>{item}</a></div>
                        }})}
                        <div className = 'sml'><svg  id="aa" viewBox="0 0 12 16" version="1.1" width="12px" height="16px" fill ='white'><path d="M12 9H7v5H5V9H0V7h5V2h2v5h5v2z"/> </svg></div>
                        <div className = 'sml'><img  id="aa" alt="@rams7267" src="https://avatars2.githubusercontent.com/u/32152611?s=40&amp;v=4" height="20" width="20" /></div>
                </div>}
            </div>
            <div className="navbar">
                <div >
                    <svg id = 'logo' height="24" viewBox="0 0 16 16" version="1.1" width="20%" ><path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0016 8c0-4.42-3.58-8-8-8z"/></svg>
                    <input id = 'navin' placeholder = 'Search or jump to...'/>
                </div>
                <div className = 'mainNav'>
                <ul className = "mainNavitems">
                    {items.map(item => {{
                        return <li key = {item} id = 'a-1' href = '#home'><a>{item}</a></li>
                    }})}
                </ul>
                <ul id='icons'>
                    <li><svg id="bell" version="1.1" width="14" height="16" ><path d="M14 12v1H0v-1l.73-.58c.77-.77.81-2.55 1.19-4.42C2.69 3.23 6 2 6 2c0-.55.45-1 1-1s1 .45 1 1c0 0 3.39 1.23 4.16 5 .38 1.88.42 3.66 1.19 4.42l.66.58H14zm-7 4c1.11 0 2-.89 2-2H5c0 1.11.89 2 2 2z"/></svg></li>
                    <li><svg id="plus" viewBox="0 0 12 16" version="1.1" width="12" height="16" aria-hidden="true"><path d="M12 9H7v5H5V9H0V7h5V2h2v5h5v2z"/></svg> </li>
                    <li><span className="dropdown-caret"></span></li>
                    <li><img id = 'user' alt="@rams7267" src="https://avatars2.githubusercontent.com/u/32152611?s=40&amp;v=4" height="20" width="20" /></li>
                </ul>
                </div>
            </div>
        </div>
    );
}

export default Navbar;
