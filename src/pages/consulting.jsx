import styles from "../styles/consulting.module.css";
import { Link } from "react-router-dom";

function Consulting() {
  return (
    <>
      <div className={styles.snapContainer}>

        {/* ===== Introduction =====*/}
        <section className={styles.intro}>
          <div className={styles.introContent}>
            <h1 className={styles.title}>Consulting</h1>
            <p className={styles.subtitle}>
              I have supported undergraduates, graduate students, and
              postdoctoral researchers in completing independent projects,
              dissertations, and manuscripts.
            </p>
            <p className={styles.subtitle}>
              In addition to academic projects, I also partner with nonprofits,
              startups, and organizations who want to make their data more
              useful and actionable.
            </p>
            <p className={styles.subtitle}>
              Whether you are just starting a project or polishing the final
              manuscript, I can help you get clarity and confidence in your data
              and ideas.
            </p>
            <p className={styles.subtitle}>
              👉 <a href="mailto:contact@pearlynne.dev">Contact Me</a> to start a
              conversation or check out <Link to="/resources"> 💻 snippets from my workshops.</Link>

            </p>
          </div>
        </section>

        {/* ===== Services Accordion =====*/}
        <section className={styles.services}>
          <h2 className={styles.sectionTitle}>Services offered</h2>
          <div className={styles.accordion}>
            <details>
              <summary>Data & Statistical Consulting</summary>
                <ul>
                  <li>Data cleaning, wrangling, workflow design</li>
                  <li>Statistical analysis</li>
                  <li>Interpreting results and creating visualizations</li>
                  <li>Linking results to actionable insights</li>
                  <li>
                    Projects: <a href="./projects/DS01">EACSF</a>,{" "}
                    <a href="./projects/DS04">Sleep Construct</a>
                  </li>
                </ul>
            </details>
            <details>
              <summary>Academic Consulting</summary>
                <ul>
                  <li>Study design and methodology support</li>
                  <li>Structuring theses, dissertations, and manuscripts</li>
                  <li>Editing, proofreading, and figure/table preparation</li>
                  <li>Navigating the research process from start to finish</li>
                  <li>
                    Projects: <a href="./projects/DS03">E4</a>,{" "}
                    <a href="./projects/DS02">Glymphatic System</a>
                  </li>
                </ul>
            </details>
            <details>
              <summary>Domain Expertise</summary>
                <ul>
                  <li>Expertise in human development data</li>
                  <li>
                    Specialization in sleep, neurodevelopmental disabilities,
                    and neuroimaging
                  </li>
                  <li>Translating findings for diverse audiences</li>
                  <li>
                    Supporting interdisciplinary teams working with clinical,
                    behavioral, or imaging data
                  </li>
                  <li>
                    Advisory role on project framing, design, or grant-writing
                  </li>
                  <li>
                    Projects: <a href="./projects/DS01">EACSF</a>,{" "}
                    <a href="./projects/DS02">Glymphatic System</a>
                  </li>
                </ul>
            </details>
          </div>
        </section>

        {/* ===== Past Clients / Collaborators =====*/}
        <section className={styles.clients}>
          <h2 className={styles.sectionTitle}>Selected Clients</h2>
          <ul className={styles.clientList}>
            <li>
              <strong><a href="https://scholars.latrobe.edu.au/bflower">Dr. Flower B</a> <p className={styles.clientsName}>(Lecturer at La Trobe University)</p></strong> –
              Community Consultant for thesis projects (ongoing)
            </li>
            <li>
              <strong>
                Sun J <p className={styles.clientsName}>(now Clinical Recruitment Coordinator at Parexel)</p>
              </strong>{" "}
              – Independent undergraduate research project (completed)
            </li>
            <li>
              <strong>
                Zhang S <p className={styles.clientsName}>(now Graduate Student at Virginia Tech School of
                Neuroscience)</p>
              </strong>{" "}
              – Independent undergraduate research project (completed)
            </li>
            <li>
              <strong>
                Dr. Sum MY <p className={styles.clientsName}>(now Researcher in Singapore)</p>
              </strong>{" "}
              – Dissertation support (completed)
            </li>
            <li>
              <strong>
                Dr. Hassan MZ <p className={styles.clientsName}>(now Postdoctoral fellow in Michigan State
                University Department of Psychology)</p>
              </strong>{" "}
              – Dissertation support (completed)
            </li>
          </ul>
					<h2 className={styles.sectionTitle}>Workshops</h2>
          <ul className={styles.clientList}>
            <li>
              Nov 7th, 2025 - Workshop on Data & Stats in Research for <a href="https://autismlab.psy.msu.edu/">MSU Autism Lab</a> (<a href="./resources">💻 Slide preview</a>)
            </li>
						<li>
							Sept 7th, 2025 - Workshop on Data in Research through Visualizations for <a href="https://hhs.purdue.edu/sleep/">Purdue Sleep and Developmental Studies Lab</a>
						</li>
          </ul>
        </section>
      </div>
    </>
  );
}

export default Consulting;
