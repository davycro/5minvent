import React from 'react'
import Article from './Article.js'
import './Oxygenation.css'

const Oxygenation = () => (
  <Article title="Oxygenation" youtubeSrc="1i9cbJKdtQo">

    <h3 className="showNotes">Show notes</h3>

    <p>
      We increase the oxygen levels in the blood by increasing two variables: (1) the inspired concentration of oxygen (<strong> FiO2</strong>), and
      (2) the pressure in the alveoli at the end of expiration, known as positive end expiratory pressure or <strong>PEEP</strong>.
    </p>

    <p>
      Oxygen is corrosive. Multiple studies, listed below, show that highly concentrationed oxygen (e.g. an FiO2 of 100%) harms patients.
    </p>

    <p>
      Thus, you should <strong>start with the lowest FiO2 possible</strong> needed to acheive an oxygen saturation of 90% or more.
    </p>

    <p>
      PEEP raises your baseline pressure from atmospheric pressure. This increased pressure increases the partial pressure of Oxygen in the Alveoli.
    </p>

    <p>
      PEEP also recruits additional alveoli to participate in gas exchange increasing your oxygenation capability.
    </p>

    <figure className="figure">
      <img src="peep_diagram.png" className="img-responsive" alt=""></img>
      <figcaption className="figure-caption">
        Figure 1. Waveform that shows the increased minute ventilation when PEEP is increased from 0 to 5 cm of H2O.
      </figcaption>
    </figure>

    <p>
      If you increase the FiO2, then remember to <strong>increase the PEEP</strong> as well.
    </p>

    <table className="table table-striped table-hover peep-table">
      <thead>
        <tr>
          <th>FiO2</th>
          <th>PEEP</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>30</td>
          <td>5</td>
        </tr>
        <tr>
          <td>40</td>
          <td>5-8</td>
        </tr>
        <tr>
          <td>50</td>
          <td>8-10</td>
        </tr>
        <tr>
          <td>60</td>
          <td>10</td>
        </tr>
        <tr>
          <td>70</td>
          <td>10-14</td>
        </tr>
        <tr>
          <td>80</td>
          <td>14</td>
        </tr>
        <tr>
          <td>90</td>
          <td>14-18</td>
        </tr>
        <tr>
          <td>100</td>
          <td>18-24</td>
        </tr>
      </tbody>
    </table>

    <p>
      Table 1. PEEP table used to calculate the PEEP for a given FiO2
    </p>


    <h2 className="Oxygenation-evidence-title">
      The evidence
    </h2>

    <div className="Oxygenation-reference">
      <h4>
        1. Inappropriate Oxygen use, even for a short amount of time in the ED, was
        associated with increased mortality.
      </h4>

      <a href="critcarePage2017.pdf" target="_blank">
        Read study here
      </a>

      <h5>Authors Conclusions</h5>
      <p>
        ED exposure to hyperoxia is common and associated with increased mortality in mechanically ventilated patients achieving normoxia after admission. This suggests that hyperoxia in the immediate post-intubation period could be particularly injurious, and targeting normoxia from initiation of mechanical ventilation may improve outcome.
      </p>

      <p>
        <small>
          David Page, Enyo Ablordeppey, Brian T. Wessman, Nicholas M. Mohr, Stephen Trzeciak, Marin H. Kollef, Brian W. Roberts and Brian M. Fuller Emergency department hyperoxia is associated with increased mortality in mechanically ventilated patients: a cohort study; Critical Care (2018) 22:9 DOI 10.1186/s13054-017-1926-4
        </small>
      </p>
    </div>

    <div className="Oxygenation-reference">
      <h4>
        2. Inappropriate oxygen is harmful in STEMI patients.
      </h4>

      <a href="CIRCULATIONAHA.114.014494.full.pdf" target="_blank">
        Read study here
      </a>

      <h5>Authors Conclusions</h5>
      <p>
        Supplemental oxygen therapy in patients with STEMI but without hypoxia may increase early myocardial injury and was associated with larger myocardial infarct size assessed at six months.
      </p>

      <p>
        <small>
          Dion Stub, Karen Smith, Stephen Bernard, Ziad Nehme, Michael Stephenson, Janet E. Bray, Peter Cameron, Bill Barger, Andris H. Ellims, Andrew J. Taylor, Ian T. Meredith and David M. Kaye on behalf of the AVOID Investigators. Air Versus Oxygen in ST-Segment Elevation Myocardial Infarction; Circulation. 2015
        </small>
      </p>
    </div>


    <div className="Oxygenation-reference">
      <h4>
        3. Inappropriate oxygen is harmful in ROSC patients.
      </h4>

      <a href="https://jamanetwork.com/journals/jama/fullarticle/185969" target="_blank">
        Read study here
      </a>

      <h5>Authors Conclusions</h5>
      <p>
        Among patients admitted to the ICU following resuscitation from cardiac arrest, arterial hyperoxia was independently associated with increased in-hospital mortality compared with either hypoxia or normoxia
      </p>

      <p>
        <small>
          J. Hope Kilgannon, MD; Alan E. Jones, MD; Nathan I. Shapiro, MD, MPH; Mark G. Angelos, MD; Barry Milcarek, PhD; Krystal Hunter, MBA; Joseph E. Parrillo, MD; Stephen Trzeciak, MD, MPH; Association Between Arterial Hyperoxia Following Resuscitation From Cardiac Arrest and In-Hospital Mortality; JAMA. 2010;303(21):2165-2171. doi:10.1001/jama.2010.707
        </small>
      </p>
    </div>

    <div className="Oxygenation-reference">
      <h4>
        4. Inappropriate oxygen leads to increased mortaility in ICU patients.
      </h4>

      <a href="https://jamanetwork.com/journals/jama/fullarticle/2565306" target="_blank">
        Read study here
      </a>

      <h5>Authors Conclusions</h5>
      <p>
        Among critically ill patients with an ICU length of stay of 72 hours or longer, a conservative protocol for oxygen therapy vs conventional therapy resulted in lower ICU mortality. These preliminary findings were based on unplanned early termination of the trial, and a larger multicenter trial is needed to evaluate the potential benefit of this approach.
      </p>

      <p>
        <small>
          Massimo Girardis, MD; Stefano Busani, MD; Elisa Damiani, MD; Abele Donati, MD; Laura Rinaldi, MD; Andrea Marudi, MD; Andrea Morelli, MD; Massimo Antonelli, MD; Mervyn Singer, MD, FRCA, Effect of Conservative vs Conventional Oxygen Therapy on Mortality Among Patients in an Intensive Care Unit The Oxygen-ICU Randomized Clinical Trial, JAMA. 2016;316(15):1583-1589. doi:10.1001/jama.2016.11993
        </small>
      </p>
    </div>


    <strong>

    </strong>

  </Article>
)

export default Oxygenation
