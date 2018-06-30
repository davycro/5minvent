import React from 'react'
import Article from './Article.js'
import YoutubeVideo from '../YoutubeVideo.js'
import styled from 'styled-components'


const Subtitle = styled.div`
  font-size: 1rem;
  font-weight: 600;
  margin-top: 1rem;
`;

const List = styled.ul`
  list-style-position: outside;
`;

const Item = styled.li`

  > strong {
    padding-right: 6px;
  }
`;

const Home = () => (
  <Article title="Welcome!">

    <YoutubeVideo src="uL3VU0XAEFY" />

    <Subtitle>
      5 minute vent will train you how to operate the ventilator
    </Subtitle>

    <List>
      <Item>
        <strong>
          Learn the setup:
        </strong>
        Set your vent correctly from the time of initiation
      </Item>
      <Item>
        <strong>
          Learn the modes:
        </strong>
        Understand the basic ventilator modes and when to use them
      </Item>
    </List>

    <p>
      Ventilators can be intimidating. While is is tempting to take the hands off approach, even small changes to your settings can significantly improve your patients outcomes. We took the most important aspects of ventilator management and condensed them into easy to digest 5 minute morsels.
    </p>


  </Article>
)


export default Home


