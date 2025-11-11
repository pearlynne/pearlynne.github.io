import styles from "../styles/consulting.module.css";

function Consulting() {
  return (
    <>
      <div className={styles.snapContainer}>

        {/* ===== Introduction =====*/}
        <section className={`${styles.section} ${styles.intro}`}>
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
              👉<a href="mailto:contact@pearlynne.dev">Contact Me</a> to start a
              conversation.
            </p>
          </div>
        </section>

        {/* ===== Services Accordion =====*/}
        <section className={`${styles.section} ${styles.services}`}>
          <h2 className={styles.sectionTitle}>Services offered</h2>
          <div className={styles.accordion}>
            <details>
              <summary>Data & Statistical Consulting</summary>
              <p>
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
              </p>
            </details>
            <details>
              <summary>Academic Consulting</summary>
              <p>
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
              </p>
            </details>
            <details>
              <summary>Domain Expertise</summary>
              <p>
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
                    Projects: <a href="./projects/EACSF">EACSF</a>,{" "}
                    <a href="./projects/GS">Glymphatic System</a>
                  </li>
                </ul>
              </p>
            </details>
          </div>
        </section>

        {/* ===== Past Clients / Collaborators =====*/}
        <section className={`${styles.section} ${styles.clients}`}>
          <h2 className={styles.sectionTitle}>Selected Clients</h2>
          <ul className={styles.clientList}>
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
                Dr. Sum MY (now Senior Research Specialist at National Council
                of Social Science Singapore)
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
      </div>
    </>
  );
}

export default Consulting;
