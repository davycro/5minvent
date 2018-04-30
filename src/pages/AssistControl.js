import React from 'react'

const AssistControl = () => (
  <div className="Article">

    <h3 class="Article-title">Assist Control</h3>

    <div class="video-responsive">
      <iframe width="560" height="315" src="https://www.youtube.com/embed/iQaXYBewar8?rel=0" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>
    </div>

    <h3 class="showNotes">Show notes</h3>
    <p>
      Assist Control = A/C = CMV
    </p>
    <p>Set FiO2 as low as possible for SaO2 of >90%, Set PEEP according to your PEEP table.</p>
    <p>Measure patient, use height to find IBW on either MDCALC or table below.</p>
    <p>Set Respiratory Rate to 16-20. Go higher for patients with elevated CO2 levels. You may be able to go lower in patients with normal ventilation who were intubated for airway protection.</p>
    <p>The set tidal volume and rate are minimums that the patient will get regardless of whether or not they breath.</p>
    <p>
    If the patient breaths at a rate above the set rate, every additional breath is also guaranteed the set tidal volume.</p>

    <h4>Example</h4>
    <pre class="code">
      <code>
        RR on vent: 12
        Vt: 500
        Additional breaths by patient: 8

        Total RR: 20
      </code>
    </pre>

    <p><b>What will be the minute ventilation?</b></p>

    <pre class="code">
      <code>
        RR x Vt = 20 x 500mL = 10,000mL or 10L
      </code>
    </pre>

    <p>
      We used 20 instead of 12 because the patient is breathing 20 times per minute and each respiration is guaranteed the set tidal volume.
    </p>

  </div>
)

export default AssistControl
