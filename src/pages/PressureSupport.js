import React from 'react'
import YoutubeVideo from '../YoutubeVideo.js'

const PressureSupport = () => (

<div className="Article">

  <h3 class="Article-title">Pressure Support</h3>

  <YoutubeVideo src="bDy2006JC0g" />

  <h3 class="showNotes">Show notes</h3>

  <h6>
    Spontaneous Mode; CPAP with Pressure Support, Pressure Support Ventilation.
  </h6>
  <p>
    You will set 3 things:
    <ol>
      <li>Pressure Support (PS)</li>
      <li>PEEP, and</li>
      <li>FiO2</li>
    </ol>
  </p>

  <h6>
    FiO2 and PEEP
  </h6>
  <p>
    Use the lowest possible FiO2 to maintain a SaO2 of 90%.
  </p>
  <p>
    As you go up on FiO2 also go up on PEEP according to a PEEP table.
  </p>

  <h6>
    Pressure Support (PS)
  </h6>
  <p>
    The ventilation detects the patient starting a respiration and increases the pressure according to the pressure support.
  </p>
  <img src="pressure_support/figure1.png" className="img-responsive" alt=""></img>
  <p>
    The ventilator senses when the patient's inspiratory flow has slowed indication that the patient is finished with the respiration. At this time, the vent drops the pressure back down to the set PEEP.
  </p>

  <img src="pressure_support/figure2.png" className="img-responsive" alt=""></img>
  <p>
    Breaths are completely spontaneous. The patient determines the size of the breath.
  </p>

  <img src="pressure_support/figure3.png" className="img-responsive" alt=""></img>
  <p>
    The patient determines their own respiratory rate. If the patient does not breathe, no breath will be given. If your patient does not breathe for a set amount of time, usually 20 seconds, the vent will go into a backup mode called apnea ventilation. Mandatory breaths will be given at regular intervals. It will stay in this backup mode until the alarm is reset.
  </p>

  <img src="pressure_support/figure4.png" className="img-responsive"></img>




</div>


)
export default PressureSupport
