import { useState } from "react";
import useInViewAll from "../components/useInViewAll";
import DetailsTrigger from "../components/ConsultTrigger";
import Body from "../components/Body";

function Consulting() {
  useInViewAll();

  const [activeKey, setActiveKey] = useState(null);

  const consultingItems = [
    {
      key: "data",
      label: "Data & Stats",
      content: (
        <div>
          <h2>Data & Statistical Consulting</h2>
          <ul>
            <li>Data cleaning, wrangling, workflow design</li>
            <li>Statistical analysis</li>
            <li>Interpreting results and creating visualizations</li>
            <li>Linking results to actionable insights</li>
            <li>
              Projects: <a href="./projects/EACSF">EACSF</a>,{" "}
              <a href="./projects/SleepConstruct">Sleep Construct</a>
            </li>
          </ul>
        </div>
      ),
    },
    {
      key: "academic",
      label: "Academic",
      content: (
        <div>
          <h2>Academic Consulting</h2>
          <ul>
            <li>Study design and methodology support</li>
            <li>Structuring theses, dissertations, and manuscripts</li>
            <li>Editing, proofreading, and figure/table preparation</li>
            <li>Navigating the research process from start to finish</li>
            <li>
              Projects: <a href="./projects/E4">E4</a>,{" "}
              <a href="./projects/GS">Glymphatic System</a>
            </li>
          </ul>
        </div>
      ),
    },
    {
      key: "domain",
      label: "Domain",
      content: (
        <div>
          <h2>Domain Expertise</h2>
          <ul>
            <li>Expertise in human development data</li>
            <li>
              Specialization in sleep, neurodevelopmental disabilities, and
              neuroimaging
            </li>
            <li>Translating findings for diverse audiences</li>
            <li>
              Supporting interdisciplinary teams working with clinical,
              behavioral, or imaging data
            </li>
            <li>Advisory role on project framing, design, or grant-writing</li>
            <li>
              Projects: <a href="./projects/EACSF">EACSF</a>,{" "}
              <a href="./projects/GS">Glymphatic System</a>
            </li>
          </ul>
        </div>
      ),
    },
  ];

  return (
    <Body>
      <div className="consult-intro">
        <p>
          I have supported undergraduates, graduate students, and postdoctoral
          researchers in completing independent projects, dissertations, and
          manuscripts.
        </p>
        <p>
          In addition to academic projects, I also partner with nonprofits,
          startups, and organizations who want to make their data more useful
          and actionable.
        </p>
        <p>
          Whether you’re just starting a project or polishing the final
          manuscript, I can help you get clarity and confidence in your data and
          ideas.
        </p>
      </div>
      <section className="consult-section first-section parallax-section">
        <div>
          <p>
            👉 <a href="mailto:contact@pearlynne.dev">Contact Me</a> to start a
            conversation.
          </p>
        </div>
        <div className="left-col">
          <div id="consult-details" className="consult-info">
            {activeKey === null ? (
              <p> </p>
            ) : (
              consultingItems.find((item) => item.key === activeKey)?.content
            )}
          </div>
        </div>

        <div className="right-col">
          <div className="section-title consult-links">
            {consultingItems.map((item) => (
              <DetailsTrigger
                key={item.key}
                label={item.label}
                onClick={() => setActiveKey(item.key)}
              />
            ))}
          </div>
        </div>
        <p>Find out more ↓</p>
      </section>

      <section className="consult-clients parallax-section">
        <div className="section-title">Selected Clients</div>
        <ul>
          <li>
            <strong>Dr. Flower B (Lecturer at La Trobe University)</strong> –
            Community Consultant for thesis projects (ongoing)
          </li>
          <li>
            <strong>
              Sun J (now Clinical Recruitment Coordinator at Parexel)
            </strong>{" "}
            – Independent undergraduate research project (completed)
          </li>
          <li>
            <strong>
              Zhang S (now Graduate Student at Virginia Tech School of
              Neuroscience)
            </strong>{" "}
            – Independent undergraduate research project (completed)
          </li>
          <li>
            <strong>
              Dr. Sum MY (now Senior Research Specialist in Singapore)
            </strong>{" "}
            – Dissertation support (completed)
          </li>
          <li>
            <strong>
              Dr. Hassan MZ (now Postdoctoral fellow in Michigan State
              University Department of Psychology)
            </strong>{" "}
            – Dissertation support (completed)
          </li>
        </ul>
      </section>
    </Body>
  );
}

export default Consulting;
