import React from 'react'
import Article from './Article.js'
import styled from 'styled-components'


const TidalVolume = () => (
  <Article
    title="Tidal Volume"
    youtubeSrc="Uo43VOkKRXY">

    <h3 className="showNotes">Show notes</h3>

    <p>
      Minute Ventilation = Tidal Volume x Respiratory Rate
    </p>

    <p>
      Increasing tidal volume makes your ABG look really good, but worsens the patients outcomes!
    </p>

    <p>
      Always measure your patients. You are not a carnival worker! Do not guess height!
    </p>

    <p>
      Use a tidal volume table or <a href="https://www.mdcalc.com/endotracheal-tube-ett-depth-tidal-volume-calculator" target="_blank">calculator</a>.
    </p>

    <p>
      Your goal of tidal volume should be less than 8mL/KG of IBW based on height.
    </p>

    <p>
      If your patient has ARDS, your goal should be less than 6mL/KG of IBW based on height.
    </p>

    <p>
      If you cannot maintain a SaO2 of 90% with a 30% FiO2, consider if your patient is in ARDS.
    </p>

  </Article>
)


export default TidalVolume
