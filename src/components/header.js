import React, { Component } from 'react';
import Typed from 'react-typed';
import Social from './social';
import styled from 'styled-components'

class Header extends Component {

  state = {
    adjectives: ['is a software engineer', 'is a full-stack web developer', 'is a creative technologist', 'is an afrofuturist', 'is subscribed to too many podcasts']
  }

  funText = () => {
    return (
      <Typed
        loop={true}
        typeSpeed={90}
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
            <QuarterBox><GoldText>bee: // 🐝 </GoldText></QuarterBox>
            <NameBox>jarret bryan</NameBox>
            <FullBox>{this.funText()}.</FullBox>
            <QuarterBox onMouseOver={() => console.log('hey')}>about me</QuarterBox>
            <QuarterBox>projects</QuarterBox>
            <QuarterBox>social</QuarterBox>
            <QuarterBox>contact me</QuarterBox>
          </MainBox>
        </CenterBox>
      </Article>
    );
  }
}

const Article = styled.div.attrs({
  className: "vh-75 dt w-100 bg-black"
})``

const CenterBox = styled.div.attrs({
  className: "dtc v-mid tc ph3 ph4-l"
})``

const MainBox = styled.div.attrs({
  className: "container measure center f3 lh-copy code flex flex-wrap bg-white"
})``

const QuarterBox= styled.div.attrs({
  className: "flex dtc pl3 outline w-25 fw1 hover-bg-gold"
})``

const NameBox = styled.div.attrs({
  className: "flex pl3 outline w-75 fw9 b"
})``

const FullBox = styled.div.attrs({
  className: "flex w-100 pl3 mb4 mb0-l mb4 outline"
})``

// const Links = styled.div.attrs({
//   className: "mv0 w-100 h-100 w-50-m w-25-l mw5 center"
// })``

const GoldText = styled.span.attrs({
  className: "gold"
})``



export default Header;
