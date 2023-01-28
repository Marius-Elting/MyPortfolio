import SingleProject from "../../components/SingleProject/SingleProject";
import ProjectData from "../../ProjectData.json"
import "./AllProjects.css";
import { aosDataProject } from "../../Imports";
import { Helmet } from "react-helmet";
function AllProjects() {
    return (<main id="AllProjectsWrapper">
        <Helmet>
            <meta charSet="utf-8" />
            <title>My Projects - Marius Elting - Webdeveloper</title>
            <link rel="canonical" href="https://mariuselting.dev/projects" />
            <meta name="description" content="I'm Marius Elting, this is my Portfolio. 
  Watch my TechStack, Projects and Contact me.
  I'm an aspiring Full Stack Web Developer using the MERN Stack. Here you con find my Projects" />
        </Helmet>
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