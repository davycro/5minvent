import React from 'react';
import styled from 'styled-components';
import YoutubeVideo from '../YoutubeVideo.js';


const Title = styled.h3`
  color: #414857;
  line-height: 1.8rem;
  margin-bottom: 0;
  padding-bottom: 2rem;
  padding-top: 1rem;
  font-weight: 500;
  font-size: 1.4rem;
`;

const Container = styled.div`

  padding: 0 2rem 0 1rem;

  //
  // Large screen
  @media only screen and (min-width: 601px) {
    padding: 0 4rem;
    margin-left: 12rem;
    margin-bottom: 200px;
  }
`;

const Article = (props) => (

  <Container>
    <Title>{props.title}</Title>
    {props.youtubeSrc ? <YoutubeVideo src={props.youtubeSrc} /> : null }
    {props.children}
  </Container>
)

export default Article;
