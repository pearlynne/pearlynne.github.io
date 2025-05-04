import React from "react";
import Body from "../components/Body";
import PresentationsToggle from "../components/PresentationsToggle";
import PublicationItem from "../components/Publications";

function Publications() {
  return (
    <Body title="Selected Publications">
      <div className="publications-section">
        <div className="publications-container">
					<ul className="publication-list">
        <PublicationItem
          authors={<><strong>Chong, P. L. H.,</strong> Garic, D., Shen, M. D., & Schwichtenberg, A. J</> }
					pubDate="(2022)"
          title="Sleep, cerebrospinal fluid, and the glymphatic system: A systematic review"
          journal="Sleep Medicine Reviews, 61, 101572"
          link="https://doi.org/10.1016/j.smrv.2021.101572"
        />
        <PublicationItem
          authors={<><strong>Chong, P. L. H.,</strong> Abel, E., Pao, R., McCormick, C. E. B., & Schwichtenberg, A. J</>}
					pubDate="(2021)"
          title="Sleep dysregulation and circadian electrodermal activity in children with autism spectrum disorder"
          journal="The Journal of Genetic Psychology, 182(5), 335–347"
          link="https://doi.org/10.1080/00221325.2021.1911919"
        />
        <PublicationItem
          authors={<>Ho, N. F., <strong>Chong, P. L. H.,</strong> Lee, D. R., Chew, Q. H., Chen, G., & Sim, K</>}
					pubDate="(2019)"
          title="The amygdala in schizophrenia and bipolar disorder: A synthesis of structural MRI, diffusion tensor imaging, and resting-state functional connectivity findings"
          journal="Harvard Review of Psychiatry, 27(3), 150-164"
          link="https://doi.org/10.1097/HRP.0000000000000207"
        />
        <PublicationItem
          authors={<> Lo, J. C., <strong>Chong, P. L. H.,</strong> Ganesan. S, Leong, L. F. R., & Chee, W. L. M</>}
					pubDate="(2016)"
          title="Sleep deprivation increases formation of false memory"
          journal="Journal of Sleep Research, 25(6), 673–682"
          link="https://doi.org/10.1111/jsr.12436"
        />
        <PublicationItem
          authors={<>Poh, J. H., <strong>Chong, P. L. H.,</strong> & Chee, W. L. M</>}
					pubDate="(2016)"
          title="Sleepless night, restless mind: Effects of sleep deprivation on mind wandering"
          journal="Journal of Experimental Psychology: General, 145(10), 1312 – 1318"
          link="https://doi.org/10.1037/xge0000207"
        />
      </ul>
					<div className="subheading">For a comprehensive list, you can view my <a href="https://scholar.google.com/citations?hl=en&user=JXQzn4QAAAAJ" target="_blank">Google Scholar profile.</a></div>
        </div>
				<PresentationsToggle />
      </div>
    </Body>
  );
}

export default Publications;
