import React, { Component } from 'react';
import Typed from 'react-typed';
import styled from 'styled-components'

class Header extends Component {

  state = {
    adjectives: ['is a full-stack web developer.', 'is a technologist.', 'is an afrofuturist.', 'is subscribed to too many podcasts.']
  }

  funText = () => {
    return (
      <Typed
        loop={true}
        typeSpeed={100}
        backSpeed={30}
        strings={this.state.adjectives}
        smartBackspace
        shuffle={false}
        backDelay={1000}
        showCursor
        cursorChar="|"
      />
    )

  }

  render() {
    return (
      <Article>
        <CenterBox>
          <MainBox>
            <IconBox onMouseOver={() => this.props.handleHover('bee')}><GoldText>// 🐝 </GoldText></IconBox>
            <NameBox><p className="ma0">jarret bryan</p></NameBox>
            <FullBox>{this.funText()}</FullBox>
            <Tribox onMouseOver={() => this.props.handleHover('about')}>about me</Tribox>
            <Tribox onMouseOver={() => this.props.handleHover('projects')}>projects</Tribox>
            <TriboxFill onMouseOver={() => this.props.handleHover('contact')}>contact me</TriboxFill>
          </MainBox>
        </CenterBox>
      </Article>
    );
  }
}

const Article = styled.div.attrs({
  className: "vh-50 dt w-100 bg-black"
})``

const CenterBox = styled.div.attrs({
  className: "dtc v-mid tc ph3 ph4-l"
})``

const MainBox = styled.div.attrs({
  className: "container measure center f3 lh-copy code flex flex-wrap bg-white"
})``

const Tribox= styled.div.attrs({
  className: "flex dtc pl3 ba fw1 hover-bg-gold mv0 w-100 w-33-m w-33-l"
})``
const TriboxFill = styled.div.attrs({
  className: "flex dtc pl3 ba fw1 hover-bg-gold mv0 w-100 w-34-m w-34-l"
})``

// not in use 
// const Quarterbox = styled.div.attrs({
//   className: "flex dtc pl3 ba fw1 hover-bg-gold mv0 w-100 w-25-m w-25-l"
// })``

const IconBox = styled.div.attrs({
  className: "flex pl3 ba w-20 fw9 hover-bg-green b center"
})``

const NameBox = styled.div.attrs({
  className: "flex pl3 ba w-80 fw9 b center hover-bg-gold"
})``

const FullBox = styled.div.attrs({
  className: "flex w-100 pl3 ba"
})``

const GoldText = styled.span.attrs({
  className: "gold",
  role: "img",
  "aria-label": "bee emoji"
})``



export default Header;
