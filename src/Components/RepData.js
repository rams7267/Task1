import React, {useState, useEffect} from 'react'
import axios from 'axios'

function RepData() {
    const [displayData, setDisplayData] = useState([])
    const [finalData, setFinalData] = useState([])
    const [input, setInput] = useState('')
    const [lang, setLang] = useState([])
    const [typeIn, setTypeIn] = useState('All')
    const [langIn, setLangIn] = useState('All')
    const [search, setSearch] = useState(false)

    useEffect(() =>{
        axios.get(`https://api.github.com/users/supreetsingh247/repos`)
            .then(resp => {
                console.log('Hi')
                setDisplayData(resp.data)
                {console.log(finalData)}
                setFinalData(displayData)
            })
            
            .catch(error => {
                console.log(error)
            })
    },[])

    const filteredData = () => {
       
        const temp = displayData.filter(item => {
            return (input.length == 0 || (item.name && item.name.toLowerCase().indexOf(input.toLowerCase()) != -1) || 
                (item.description && item.description.toLowerCase().indexOf(input.toLowerCase()) != -1)) && 
                (langIn == 'All' || (item.language && item.language.toLowerCase() == langIn.toLowerCase()))
        })
        setFinalData(temp)
    }
    const handleSearch = (e) => {
        setInput(e.target.value)
        setSearch(true)
        filteredData()
    }
    const handleLang = (e) => {
        setLangIn(e.target.value)
        setSearch(true)
        filteredData()
    }
    return (
        <div>
            <div className = 'Search'>
                <form>
                    <input type = 'text' value = {input} placeholder = "Find a repository..." onChange = {handleSearch} />
                    {input}
                    Type : <select type = "type" value = {typeIn} onChange = {(e) => setTypeIn(e.target.value)}>
                        <option value = 'All'>All</option>
                        <option value = 'Sources'>Sources</option>
                        <option value = 'Forks'>Forks</option>
                        <option value = 'Archived'>Archived</option>
                        <option value = 'Mirror'>Mirror</option>
                    </select>
                    Language : <select type = "language" value = {langIn} onChange = {handleLang}>
                        <option value = 'All'>All</option>
                        {displayData.map(rep => {{
                            return <option key = {rep.id} value = {rep.language}>{rep.language}</option>
                            }}
                        )}
                    </select>
                </form>
            </div>
            {search && <div className = 'resultStatistics'>
                    {finalData.length} result for {typeIn != 'All' ? typeIn : null} repositories matching {input} {langIn != 'All' ? `written in ${langIn}` : null}
                </div>}
            <div className = 'resBar'>
                {finalData.map( rep => {{
                    return <div className = {'result'} key = {rep.id}>
                        <a href = {rep.html_url}>{rep.name}</a> <br/>
                        <div id = "desc">{rep.description}</div>
                        <div className = 'count'>
                            {rep.language != null && <span className = 'dot'> </span>}{rep.language != null && rep.language}
                            {rep.stargazers_count > 0 && <svg aria-label="star" className="star" viewBox="0 0 14 16" version="1.1" width="14" height="16" role="img"><path  d="M14 6l-4.9-.64L7 1 4.9 5.36 0 6l3.6 3.26L2.67 14 7 11.67 11.33 14l-.93-4.74L14 6z"/></svg>}
                            {rep.stargazers_count > 0 && rep.stargazers_count}
                            {rep.forks_count > 0 && <svg aria-label="fork" className="forked" viewBox="0 0 10 16" version="1.1" width="10" height="16" role="img"><path d="M8 1a1.993 1.993 0 00-1 3.72V6L5 8 3 6V4.72A1.993 1.993 0 002 1a1.993 1.993 0 00-1 3.72V6.5l3 3v1.78A1.993 1.993 0 005 15a1.993 1.993 0 001-3.72V9.5l3-3V4.72A1.993 1.993 0 008 1zM2 4.2C1.34 4.2.8 3.65.8 3c0-.65.55-1.2 1.2-1.2.65 0 1.2.55 1.2 1.2 0 .65-.55 1.2-1.2 1.2zm3 10c-.66 0-1.2-.55-1.2-1.2 0-.65.55-1.2 1.2-1.2.65 0 1.2.55 1.2 1.2 0 .65-.55 1.2-1.2 1.2zm3-10c-.66 0-1.2-.55-1.2-1.2 0-.65.55-1.2 1.2-1.2.65 0 1.2.55 1.2 1.2 0 .65-.55 1.2-1.2 1.2z"/></svg>}
                            {rep.forks_count > 0 && rep.forks_count}
                            {rep.license != null && <svg className="license" viewBox="0 0 14 16" version="1.1" width="14" height="16" aria-hidden="true"><path d="M7 4c-.83 0-1.5-.67-1.5-1.5S6.17 1 7 1s1.5.67 1.5 1.5S7.83 4 7 4zm7 6c0 1.11-.89 2-2 2h-1c-1.11 0-2-.89-2-2l2-4h-1c-.55 0-1-.45-1-1H8v8c.42 0 1 .45 1 1h1c.42 0 1 .45 1 1H3c0-.55.58-1 1-1h1c0-.55.58-1 1-1h.03L6 5H5c0 .55-.45 1-1 1H3l2 4c0 1.11-.89 2-2 2H2c-1.11 0-2-.89-2-2l2-4H1V5h3c0-.55.45-1 1-1h4c.55 0 1 .45 1 1h3v1h-1l2 4zM2.5 7L1 10h3L2.5 7zM13 10l-1.5-3-1.5 3h3z"/></svg>}
                            {rep.license != null && rep.license.name}
                            <span id = 'update' >Updated on {rep.updated_at.slice(0,10)}</span>
                        </div>
                    </div>}
                })}
            </div>
        </div>
    )
}

export default RepData
