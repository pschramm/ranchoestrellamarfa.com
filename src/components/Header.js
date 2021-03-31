import React from 'react'

const Header = (props) => (
    <header id="header" style={props.timeout ? {display: 'none'} : {}}>
        <div className="logo">
            <span className="icon fa-sun-o"></span>
        </div>
        <div className="content">
            <div className="inner">
                <h1>𝕽𝖆𝖓𝖈𝖍𝖔 𝕰𝖘𝖙𝖗𝖊𝖑𝖑𝖆 𝕸𝖆𝖗𝖋𝖆</h1>
                <p>𝖈𝖔𝖓𝖙𝖆𝖈𝖙 𝖚𝖘 𝖋𝖔𝖗 𝖌𝖆𝖍𝖊𝖗𝖎𝖓𝖌𝖘 𝖆𝖓𝖉 𝖆𝖗𝖙 𝖎𝖓𝖋𝖔𝖗𝖒𝖆𝖙𝖎𝖔𝖓.</p>
            </div>
        </div>
        <nav>
            <ul>
                <li><a href="https://www.airbnb.com/rooms/28380739" target="_">1955 Spartan</a></li>
                <li><a href="https://www.airbnb.com/rooms/9906668" target="_">1965 Tag Along </a></li>
                <li><a href="https://wa.mhttps://wa.link/ks9o1a">Chat</a></li>
                <li><a href="mailto:tilloglobe@gmail.com">Email</a></li>
            </ul>
        </nav>
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
