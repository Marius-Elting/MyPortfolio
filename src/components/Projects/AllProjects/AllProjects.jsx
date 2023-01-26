import SingleProject from "../../SingleProject/SingleProject";
import ProjectData from "../../../ProjectData.json";
import "./AllProjects.css";
import { aosDataProject } from "../../../Imports";
function AllProjects() {
    return (<main id="AllProjectsWrapper">
        <div>
            <h1 {...aosDataProject}>All my Projects</h1>

        </div>
        <article>
            {ProjectData.slice(0, 3).map((project, index) => (
                <SingleProject key={index} data={project} />
            ))}
        </article>
    </main>
    );
}

export default AllProjects;