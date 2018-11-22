import React from 'react'
import styled from 'styled-components'
import ProjectContainer from './projectcontainer';


const handleConditionals = (props) => {
    const displaying = props.textContent

    if (displaying === 'about'){
        return(
            <TextBox>
                <p className="code">Hi, my name is <span className="gold">Jarret</span>. I'm a NYC based full-stack web developer and technologist. I graduated from Brown University in 2014 with a degree in Science & Technology Studies.</p>
                <p className="code ma0"> I'm particularly interested in exploring the ways that technology informs and transforms our everyday. </p>
            </TextBox>)
    } else if (displaying === 'contact') {
        return (
            <TextBox>
                <p className="code">If you're interested in me or my work, you can find me on <Link href="https://www.linkedin.com/in/jarretbryan/">linkedin</Link>, download <Link href="/J_Bryan_Resume.pdf">my resume </Link> or <Link href="mailto:jarret.bryan@pm.me" className="link dim gold">email me</Link>.</p>
                <p className="code ma0"> I <Link href="https://twitter.com/jaybeekeeper">tweet</Link> fairly often. I blog at <Link href="https://dev.to/jaybeekeeper">dev.to</Link>. My code can be seen on <Link href="https://github.com/jarretbryan">github</Link> or <Link href="https://glitch.com/@jarretbryan">glitch</Link>. </p>
            </TextBox>
        )
    } else if (displaying === 'projects') {
        return(<ProjectContainer />)
    }
}


const Content = (props) => {
    return (
        <Main>
            {handleConditionals(props)}
            {/* <div className="dtc v-mid ph3 ph4-l">        
                {/* <p className="v-mid measure-narrow lh-title mv0 center tc code">     
                        These words apply to me: <br />
                    <span className="bg-black-90 lh-copy white pa1 tracked-tight">
                        Ruby, Javascript (ES6), HTML5, CSS3, SQL | Sinatra, Rails, React, Redux, Choo | SQLite, PostgreSQL, ActiveRecord, Rspec, Capybara, Mocha, Jest | Git, Dat 
                    </span>
                </p> */}
            {/* </div> */}
        </Main>
    )
}

const Main = styled.div.attrs({
    className: "vh-25 dt w-100 bg-black white sans-serif b"
})``

const TextBox = styled.div.attrs({
    className: "dtc v-mid ph3 ph4-l"
})``

const Link = styled.a.attrs({
    className: "link dim gold",
    rel:" noreferrer noopener",
    target:"_blank"
})``


export default Content








