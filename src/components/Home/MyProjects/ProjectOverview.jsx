import { Link } from "react-router-dom";
import "./ProjectOverview.css";
import "aos/dist/aos.css";
import SingleProject from "../../SingleProject/SingleProject";
import Data from "../../../Languages.json"

function ProjectOverwiew() {
    const lang = sessionStorage.getItem("Language")
    const { Projects } = Data[lang]

    return (
        <section id="ProjectsOverviewWrapper">
            <article>
                <h2>myProjects</h2>
            </article>
            <article className="ProjectsOverview-ProjectWrapper">
                {Projects.ProjectData.slice(0, 4).map((project, index) => (
                    <SingleProject key={index} data={project} />
                ))}
            </article>
            <article className="ProjectsOverview-Footer">
                <Link className="underlineHover" to="/projects">{Projects.showmore}</Link>
            </article>
        </section>
    );
};

export default ProjectOverwiew;