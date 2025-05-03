import { useState } from "react";
import PublicationItem from "./Publications";

const PresentationsToggle = () => {
  const [showPresentations, setShowPresentations] = useState(false);

  const togglePresentations = () => {
    setShowPresentations(!showPresentations);
  };

  return (
    <div className="presentations-container">
      <center>
        <button className="toggle-button" onClick={togglePresentations}>
          {showPresentations
            ? "Hide Selected Presentations"
            : "Show Selected Presentations"}
        </button>
      </center>

      {showPresentations && (
          <ul className="presentations-list">
            <PublicationItem
              authors={
                <>
                  <strong>Chong, P. L. H.,</strong> Elison, J., Styner, M., Shen, M. D., &
                  Schwichtenberg, A. J
                </>
              }
              pubDate="(2023, May)"
              title="Using the Baby Connectome Project to Inform Early Autism – Explorations of Sleep, Brain Anatomy, and Social Communication"
              conference="In Early Emerging Neurodevelopmental Differences in Autism"
              location="Oral presentation conducted at the annual meeting of the International Society for Autism Research (INSAR), Stockholm, Sweden"
            />

            <PublicationItem
              authors={
                <>
                  <strong>Chong, P. L. H.,</strong> Prieto, J. P., Kim, S. H., Styner, M.,
                  Elison, J., Shen, M. D., & Schwichtenberg, A. J
                </>
              }
              pubDate="(2023, March)"
              title="Sleep and extra-axial cerebrospinal fluid in early development"
              conference="In Functional and structural findings from the Baby Connectome Project"
              location="Paper Symposium conducted at the biennial meeting of the Society for Research in Child Development (SRCD), Salt Lake City, UT"
            />

            <PublicationItem
              authors={
                <>
                  <strong>Chong, P. L. H.,</strong> Kellerman, A. M., Abel, E., & Schwichtenberg,
                  A. J
                </>
              }
              pubDate="(2020, May)"
              title="Early sleep regularity in the context of elevated autism risk"
              conference="Abstract presented at the International Society for Autism Research (INSAR) conference"
              location="Virtual format"
            />

            <PublicationItem
              authors={
                <>
                  Schwichtenberg, A. J., Abel, E. A., <strong>Chong, P. L. H.,</strong> Thacker,
                  K., Crist, E., Pelecky, L., Rao, C., & Ong, J. T
                </>
              }
              pubDate="(2019, November)"
              title="Autism risk, sleep regularity, and developmental progress"
              conference="Poster presented at the annual meeting of Pediatric Sleep Medicine Conference"
              location="Naples, FL"
            />

            <PublicationItem
              authors={
                <>
                  <strong>Chong, P. L. H.,</strong> Honaker, S. M., Mindell, J. A., Kreps, T. A.,
                  & Schwichtenberg, A. J
                </>
              }
              pubDate="(2019, June)"
              title="Behavioral sleep intervention: The roles of maternal sociodemographic, emotional, and informational resources"
              conference="Poster presented at the annual meeting of the Associated Professional Sleep Societies (SLEEP)"
              location="San Antonio, TX"
            />

            <PublicationItem
              authors={
                <>
                  Kellerman, A. M., Abel, E. A., <strong>Chong, P. L. H.,</strong> &
                  Schwichtenberg, A. J
                </>
              }
              pubDate="(2019, June)"
              title="Is dysregulated sleep in early childhood associated with daytime dyadic interactions?"
              conference="Poster presented at the annual meeting of the Associated Professional Sleep Societies (SLEEP)"
              location="San Antonio, TX"
            />

            <PublicationItem
              authors={
                <>
                  {" "}
                  <strong>Chong, P. L. H.,</strong> Abel, E., Pao, R., & Schwichtenberg, A. J{" "}
                </>
              }
              pubDate="(2019, May)"
              title="Sleep dysregulation and circadian electrodermal activity in children with autism spectrum disorder"
              conference="Poster presented at the annual meeting of the International Society of Autism Research (INSAR)"
              location="Montreal, Canada"
            />

            <PublicationItem
              authors={<> <strong>Chong, P. L. H.,</strong> Schwichtenberg, A. J., & Abel, E</>}
              pubDate="(2019, March)"
              title="Sleep dysregulation and electrodermal activity in children with autism spectrum disorder"
              conference="Poster presented at the biennial meeting of the Society for Research in Child Development (SRCD)"
              location="Baltimore, MD"
            />
          </ul>
      )}
    </div>
  );
};

export default PresentationsToggle;
