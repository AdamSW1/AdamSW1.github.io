import './featured.css';
import { Project } from '../components/project';
export function Featured() {
  return (
    <div id="featuredSection" className="contentBlock">
      <section className="contentBody">
        <h1>Featured Projects</h1>
        <aside id="featuredProjects">
          <Project
            url="http://dawtrek.crcrobotics.com/"
            imageUrl="./images/projects/dawtrek.png"
            name="DawTrek Website"
            type="Club Project"
            year="2024"
            description="The 2024 website for the CRC robotics website themed around LCARS devices in Star Trek."
            languages={["NODE.JS", "REACT", "CSS"]}
          />
        </aside>
      </section>
    </div>
  )
}