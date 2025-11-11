import React, { useRef } from "react";
import styles from "../styles/publications.module.css";
import data from "../data/publications.json";
import Markdown from "react-markdown";
import useInView from "../components/useInView";

function Publications() {
	
  const aboutTitleRef = useRef();
  const inView = useInView(aboutTitleRef);

  return (
    <>
      <main className={styles.works}>
        {/* ======= Publications ======= */}
        <section className={styles.publications}>
          <h2>Publications</h2>
          <ul className={styles.list}>
            {data.publications.map((pub, idx) => (
              <li key={idx} className={styles.publicationItem}>
                <Markdown
                  components={{ strong: (props) => <strong {...props} /> }}
                >
                  {`${pub.authors} ${pub.pubDate} ${pub.title} ${pub.journal} ${
                    pub.link ? `[${pub.link}](${pub.link})` : ""
                  }`}
                </Markdown>{" "}
              </li>
            ))}
          </ul>
          <p className={styles.scholarNote}>
            For a full list, visit my{" "}
            <a
              href="https://scholar.google.com/citations?hl=en&user=JXQzn4QAAAAJ"
              target="_blank"
              rel="noopener noreferrer"
            >
              Google Scholar profile
            </a>
            .
          </p>
        </section>

        {/* ======= Presentations ======= */}
        <section className={styles.presentations}>
          <h2
            ref={aboutTitleRef}
            className={`${styles.worksTitle} ${inView ? styles.inView : ""}`}
          >
            Presentations
          </h2>
          <ul className={styles.list}>
            {data.presentations.map((pres, idx) => (
              <li key={idx} className={styles.publicationItem}>
                <Markdown
                  components={{ strong: (props) => <strong {...props} /> }}
                >
                  {`${pres.authors} ${pres.pubDate}`}
                </Markdown>{" "}
                <span className={styles.title}>{pres.title}</span>{" "}
                <Markdown>{`${pres.conference} ${pres.location}`}</Markdown>
              </li>
            ))}
          </ul>
        </section>
      </main>
    </>
  );
}

export default Publications;
