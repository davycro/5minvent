import React from 'react'
import Article from './Article.js'
import styled from 'styled-components'

const Img = styled.img`
  max-height: 300px;
  display: block;
  max-width: 100%;
`

const Figure = (props) => (
  <figure className="figure" style={{marginBottom: "2rem"}}>
    <Img src={props.src} />
    <figcaption className="figure-caption">
      {props.caption}
    </figcaption>
  </figure>
)

const InitialSettings = () => (
  <Article
    title="Initial settings"
    youtubeSrc="2Ez3dmYb9rQ">

    <h3 className="showNotes">Show notes</h3>

    <Figure
      src="initialSettings.png"
      caption="Figure 1. Protocol for ventilator setup." />

    <Figure
      src="assist_control/figure1.png"
      caption="Figure 2. Tidal volume for an ideal body weight." />

    <Figure
      src="assist_control/figure2.png"
      caption="Figure 3. PEEP table" />

  </Article>
)


export default InitialSettings
