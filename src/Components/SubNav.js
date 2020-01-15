import React, { Component } from 'react'

export class SubNav extends Component {
    render() {
        return (
            <div className = 'subnav'> 
                <ul className = 'subnavitems'>
                    <li className = 'nav'><a id="a-2" href = '#home'>Overview</a></li>
                    <li className = 'nav' id = 'rep'><a id="a-2" href = '#home'>Repositories</a><span id = 'dot'>12</span></li>
                    <li className = 'nav'><a id="a-2" href = '#home'>Projects</a><span id = 'dot'>0</span></li>
                    <li className = 'nav'><a id="a-2" href = '#home'>Stars</a><span id = 'dot'>7</span></li>
                    <li className = 'nav'><a id="a-2" href = '#home'>Followers</a><span id = 'dot'>6</span></li>
                    <li className = 'nav'><a id="a-2" href = '#home'>Following</a><span id = 'dot'>2</span></li>
                </ul>
            </div>
        )
    }
}

export default SubNav
