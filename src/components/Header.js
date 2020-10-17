import React from 'react'

const Header = (props) => (
    <header id="header" style={props.timeout ? {display: 'none'} : {}}>
        <div className="logo">
            <span className="icon fa-sun-o"></span>
        </div>
        <div className="content">
            <div className="inner">
                <h1>𝕽𝖆𝖓𝖈𝖍𝖔 𝕰𝖘𝖙𝖗𝖊𝖑𝖑𝖆 𝕸𝖆𝖗𝖋𝖆</h1>
                <p>𝖈𝖔𝖒𝖊 𝖙𝖗𝖎𝖕.</p>
            </div>
        </div>
        <div className="logo">
            <span className="icon fa-moon-o"></span>
        </div>
    </header>
)

Header.propTypes = {
    onOpenArticle: React.PropTypes.func,
    timeout: React.PropTypes.bool
}

export default Header
