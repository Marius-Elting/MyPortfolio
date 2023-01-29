import { Link } from "react-router-dom";
import "./ProjectOverview.css";
import ProjectData from "../../../ProjectData.json";
import "aos/dist/aos.css";
import SingleProject from "../../SingleProject/SingleProject";

function ProjectOverwiew() {



    return (
        <section id="ProjectsOverviewWrapper">
            <article>
                <h2>myProjects</h2>
            </article>
            <article className="ProjectsOverview-ProjectWrapper">
                {ProjectData.slice(0, 3).map((project, index) => (
                    <SingleProject key={index} data={project} />
                ))}
            </article>
            <article className="ProjectsOverview-Footer">
                <Link className="underlineHover" to="/projects">Show more</Link>
            </article>
        </section>
    );
};

export default ProjectOverwiew;