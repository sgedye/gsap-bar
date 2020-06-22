import React from 'react'
import styled from 'styled-components'
import { graphql, useStaticQuery } from 'gatsby'
import StyledHero from '../../utils/StyledHero'

const getImages = graphql`
  query {
    BackgroundImage:file(relativePath:{eq:"homeHero.jpg"}){
      childImageSharp{
        fluid(quality:100 maxWidth:4160) {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }
  }
`
  
const HomeHero = () => {
  const data = useStaticQuery(getImages)
  return (
    <StyledHero
      className="styledHero"
      fluid={data.BackgroundImage.childImageSharp.fluid}
      alt="DESCRIPTION"
      home="home"
    >
      <Wrap>
        <div className="title">
          <h1>Bar<span>N</span>one</h1>
          <h2>- hartford -</h2>
        </div> 
      </Wrap>
    </StyledHero>
  )
}

const Wrap = styled.section`
  margin-top: -100vh;
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  .title {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    min-height: 100vh;
  }
  h1, h2, span {
    color: white;
    mix-blend-mode: difference;
  }
  h1 { font-size: 13vw; }
  span { fontsize: 18vw; }
  h2 { font-size: 5vw; }
`

export default HomeHero