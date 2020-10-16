import React from 'react'

const Header = (props) => (
    <header id="header" style={props.timeout ? {display: 'none'} : {}}>
        <div className="logo">
            <span className="icon fa-sun-o"></span>
        </div>
        <div className="content">
            <div className="inner">
                <h1>𝖗𝖆𝖓𝖈𝖍𝖔 𝖊𝖘𝖙𝖗𝖊𝖑𝖑𝖆 𝖒𝖆𝖗𝖋𝖆</h1>
                <p>𝖈𝖔𝖒𝖊 𝖙𝖗𝖎𝖕</p>
            </div>
        </div>
        <nav>
            <ul>
                <li><a href="javascript:;" onClick={() => {props.onOpenArticle('intro')}}>WHAT?</a></li>
                <li><a href="javascript:;" onClick={() => {props.onOpenArticle('work')}}>WHEN?</a></li>
                <li><a href="javascript:;" onClick={() => {props.onOpenArticle('about')}}>HOW?</a></li>
                <li><a href="javascript:;" onClick={() => {props.onOpenArticle('contact')}}>WHO?</a></li>
            </ul>
        </nav>
    </header>
)

Header.propTypes = {
    onOpenArticle: React.PropTypes.func,
    timeout: React.PropTypes.bool
}

export default Header
