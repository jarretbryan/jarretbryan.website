import React from 'react'
import styled from 'styled-components'

const handleConditionals = (props) => {
    const displaying = props.textContent

    if (displaying === 'about'){
        return(
            <TextBox>
                <p>Hi, my name is <span className="gold">Jarret</span>. I'm a NYC based full-stack web developer and technologist. I graduated from Brown University in 2014 with a degree in Science & Technology Studies.</p>
                <p className="ma0"> I'm particularly interested in exploring the ways that technology informs and transforms our everyday. </p>
            </TextBox>)
    } else if (displaying === 'contact') {
        return (
            <TextBox>
                <p>If you're interested in me or my work, you can find me on <Link href="https://www.linkedin.com/in/jarretbryan/">linkedin</Link>, download <Link href="/J_Bryan_Resume.pdf">my resume </Link> or <Link href="mailto:jarret.bryan@pm.me" className="link dim gold">email me</Link>.</p>
                <p className="ma0"> I <Link href="https://twitter.com/jaybeekeeper">tweet</Link> fairly often. I blog at <Link href="https://dev.to/jaybeekeeper">dev.to</Link>. My code can be seen on <Link href="https://github.com/jarretbryan">github</Link> or <Link href="https://glitch.com/@jarretbryan">glitch</Link>. </p>
            </TextBox>
        )
    } else if (displaying === 'projects') {
        return(
            <TextBox>
                <p className="ma1"><Link href="https://radiowired.netlify.com/">RadioWired:</Link> Podcast Sampler and Discovery app (React/Redux/Rails/Semantic UI)  (<Link href="https://github.com/jarretbryan/radiowired">Code</Link>)</p>
                <p className="ma1"><Link href="https://water-me.glitch.me/">Water Me:</Link> Virtual Emoji Garden (Choo/Tachyons)(<Link href="https://glitch.com/~water-me">Code</Link>)</p>
                <p className="ma1"><Link href="https://the-driving-dead.surge.sh/">The Driving Dead:</Link> Pac-Man/Crazy Taxi Inspired Browser Game (HTML/CSS/JS) (<Link href="https://github.com/sreemudunuri/CrazyLyft">Code</Link>)</p>
                <p><Link href="https://www.youtube.com/watch?v=NuUiNs8U7ks">DirectorMe:</Link> Employee Directory with real-time search (React/Rails) (<Link href="https://github.com/jarretbryan/directory-me-client">Code</Link>)</p>
            </TextBox>
        )
    } else if (displaying === 'bee'){
        return(
            <TextBox>
                <a href="dat://09888386585c9ece5da28599768166df47e135dad69aa475366a68c4d08ade36/"><img className = "center" src="https://dat-badge.glitch.me/09888386585c9ece5da28599768166df47e135dad69aa475366a68c4d08ade36//badge.svg" alt="Dat"></img></a>
                <p className="ma1"> <span className="gold" role="img" aria-label="bees"> 🐝 🐝 🐝 🐝 🐝 🐝 🐝 🐝 🐝 🐝 🐝 </span> </p>
                <small>This site was built using <Link href="https://gatsbyjs.org">Gatsby</Link> & <Link href="http://tachyons.io/">Tachyons</Link>. It is hosted p2p with <Link href="https://datproject.org/">Dat</Link> and <Link href="https://hashbase.io/">#_hashbase</Link>.</small>
            </TextBox>
        )
    }
}


const Content = (props) => {
    return (
        <Main>
            {handleConditionals(props)}
        </Main>
    )
}

const Main = styled.div.attrs({
    className: "vh-25 dt w-100 bg-black white sans-serif b"
})``

const TextBox = styled.div.attrs({
    className: "dtc v-mid ph3 ph4-l tc code"
})``

const Link = styled.a.attrs({
    className: "link dim gold",
    rel:" noreferrer noopener",
    target:"_blank"
})``


export default Content