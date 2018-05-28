import React from 'react'
import YoutubeVideo from '../YoutubeVideo.js'

const SIMV = () => (

  <div>
    <h3 className="Article-title">SIMV</h3>
    <YoutubeVideo src="ST623cb2_-c" />

    <h3 class="showNotes">Show notes</h3>

    <h5>SIMV</h5>

    <p>
      You will set 5 variables:
      <ol>
        <li>PEEP</li>
        <li>FiO2</li>
        <li>Respiratory rate (RR)</li>
        <li>Tidal volume (Vt)</li>
        <li>Pressure support</li>
      </ol>
    </p>

    <h5>
      Respiratory Rate (RR) and Tidal Volume (Vt)
    </h5>
    <p>
      The patient will always receive this volume this many times per minute regardless of how they breath.
    </p>
    <img src="simv/fig1.png" className="img-responsive"></img>
    <br/>
    <h5>
      Pressure Support (PS)
    </h5>
    <p>
      Any time the patient breathes faster than the set RR, additional respirations will be spontaneous respirations supported with the PS.
    </p>
    <img src="simv/fig2.png" className="img-responsive"></img>

    <h5>
      PEEP FiO2
    </h5>
    <p>
      Utilize the lowest FiO2 possible to maintain SaO2 of 90%, as you go up on PEEP, Go up on FiO2 according to a PEEP table.
    </p>

    <h5>
      Example 1
    </h5>

    <pre class="code">
      <code>
        Vent Settings       Measured values<br/>
          RR - 12               RR (tot) - 20<br/>
          Vt - 500mL            Vt (Mand) - 500mL<br/>
          PS - 10               Vt (Spon) - 300mL<br/>
      </code>
    </pre>
    <p>
      What is the Minute Ventilation?<br/>
    </p>
    <pre class="code">
      <code>
        Minute Ventilation = RR x Vt
      </code>
    </pre>
    <p>
      Since we have two different tidal volumes, we must calculate the amount of minute ventilation each type of Vt contributes to minute ventilation.

      Since we have a RR set at 12, we know the patient will get 12 respirations at the set Vt of 500mL. No more, no less. These set breaths contribute 6L to our minute ventilation.
    </p>
    <pre class="code">
      <code>
        500mL x 12 respirations = 6L
      </code>
    </pre>
    <p>
      Additional respirations above 12 will be spontaneous with the support of PS. We see in the right column, these tidal volumes are at 300mL.

      First, I need to calculate how many breaths per minute (BPM) are spontaneous. If I have 20 BPM total and I know that 12 of these are vent breaths, that leaves 8 spontaneous respirations.
    </p>
    <pre class="code">
      <code>
        20 - 12 = 8.
      </code>
    </pre>
    <p>
      So now I know that my spontaneous respirations are 8 at a Vt of 300. When I multiply these, it shows the spontaneous respirations add an additional 2.4L to my minute ventilation.
    </p>
    <pre class="code">
      <code>
        300mL x 8 respirations = 2.4L
      </code>
    </pre>
    <p>
      Finally, I can add these 2 values together to see my total minute ventilation.
    </p>
    <pre class="code">
      <code>
        6L + 2.4L = 8.4L
      </code>
    </pre>
    <p>
      So my total Minute Ventilation is 8.4L
    </p>

    <h5>Example 2</h5>
    <p>
      Let us say in the above patient, I get the ABG below.
    </p>
    <pre class="code">
      <code>
      pH - 7.20<br/>
      pCO2 - 65<br/>
      HCO2 - 30
      </code>
    </pre>
    <p>
      How will increasing PS increase minute ventilation?<br/>
      <i>
        Increasing the PS should increase the size of my spontaneous tidal volumes. This will increase the portion of my minute ventilation from spontaneous breaths.
      </i>
    </p>
    <p>
      (before change)
    </p>
    <pre class="code">
      <code>
      PS = 10 cm H2O<br/>
      Spont Vt = 300 mL<br/>
      Spont RR = 8 breaths per minute<br/>
      8 x 300 mL = 2.4 L<br/>
      </code>
    </pre>

    <p>
      (after change)
    </p>
    <pre class="code">
      <code>
      PS = 15 cm H2O<br/>
      Spont Vt = 500 mL<br/>
      Spont RR = 8 breaths per minute<br/>
      8 x 500 mL = 4 L<br/>
      </code>
    </pre>

    <p>
      COUNTER ARGUMENT - If the patient can breathe spontaneously and maintain adequate Vt, I should change to spontaneous mode of ventilation and simplify management.
    </p>

    <h5>
      Example 3
    </h5>

    <p>
    In the same patient with the same ABG, how can I increase the minute ventilation by increasing the RR?
    </p>
    <p>
    The patient is receiving 12 respirations with a Vt of 500mL, and 8 respirations with a Vt of 300mL. For every 1 BPM that I increase the set RR, I increase the minute ventilation by 200mL up to the total RR.
    </p>

    <pre class="code">
      <code>
        (12 x 500 mL) + (8 x 300 mL) = 8.4 L<br/>
        <br/>
        (16 x 500 mL) + (4 x 300 mL) = 9.2 L<br/>
        <br/>
        20 x 500 mL = 10 L
      </code>
    </pre>

    <p>
      Any increase in the RR above the total RR will increase the minute ventilation by my set Vt.
    </p>


    <pre class="code">
      <code>
        22 x 500 mL = 11 L<br/>
        <br/>
        24 x 500 mL = 12 L<br/>
      </code>
    </pre>

    <p>
      COUNTER ARGUMENT - If I am increasing my set RR to match the total RR, I should change the patient to A/C and make the vent easier to manage.
    </p>


  </div>

)

export default SIMV
