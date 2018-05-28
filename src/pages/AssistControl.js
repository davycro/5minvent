import React from 'react'
import YoutubeVideo from '../YoutubeVideo.js'
import styled from 'styled-components';

const RowOfTwoFigures = styled.div`
  display: flex;
  flex-wrap: row;
  width: 100%;
  margin-bottom: 2rem;
`;

const Left = styled.div`
  width: 50%;
  padding-right: 2rem;
`;

const Right = styled.div`
  width: 50%;
`;

const Img = styled.img`
  display: block;
  max-width: 100%;
  max-height: 300px;
`;

const Figure = (props) => (
  <figure className="figure">
    <Img src={props.src} />
    <figcaption className="figure-caption">
      {props.caption}
    </figcaption>
  </figure>
)

const AssistControl = () => (
  <div>

    <h3 class="Article-title">Assist Control</h3>
    <YoutubeVideo src="iQaXYBewar8" />

    <h3 class="showNotes">Show notes</h3>
    <p>
      Assist Control = A/C = CMV
    </p>
    <p>Set FiO2 as low as possible for SaO2 of >90%, Set PEEP according to your PEEP table.</p>
    <p>Measure patient, use height to find IBW on either <a href="https://www.mdcalc.com/endotracheal-tube-ett-depth-tidal-volume-calculator" target="_blank">MDCALC</a> or table below.</p>
    <p>Set Respiratory Rate to 16-20. Go higher for patients with elevated CO2 levels. You may be able to go lower in patients with normal ventilation who were intubated for airway protection.</p>
    <p>The set tidal volume and rate are minimums that the patient will get regardless of whether or not they breath.</p>
    <p>
    If the patient breaths at a rate above the set rate, every additional breath is also guaranteed the set tidal volume.</p>

    <h4>Example</h4>
    <pre class="code">
      <code>
        RR on vent: 12<br/>
        Vt: 500 mL<br/>
        Additional breaths by patient: 8<br/>
        <br/>
        Total RR: 20
      </code>
    </pre>

    <p><b>What will be the minute ventilation?</b></p>

    <pre class="code">
      <code>
        RR x Vt = 20 x 500 mL = 10,000 mL or 10 L
      </code>
    </pre>

    <p>
      We used 20 instead of 12 because the patient is breathing 20 times per minute and each respiration is guaranteed the set tidal volume.
    </p>

    <RowOfTwoFigures>
      <Left>
        <Figure
          src="assist_control/figure1.png"
          caption="Figure 1. Tidal volume for an ideal body weight." />
      </Left>
      <Right>
        <Figure
          src="assist_control/figure2.png"
          caption="Figure 2. PEEP table" />
      </Right>
    </RowOfTwoFigures>

  </div>
)

export default AssistControl
