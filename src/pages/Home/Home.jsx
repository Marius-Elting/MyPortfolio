import ProjectOverwiew from '../../components/Home/MyProjects/ProjectOverview';
import TechStack from "../../components/Home/TechStack/TechStack";
import ThisIsMe from "../../components/Home/ThisIsMe/ThisIsMe";
import "./Home.css";
import { Helmet } from 'react-helmet';
function Home() {
    return (
        <main id="HomeWrapper">
            <Helmet>
                <meta charSet="utf-8" />
                <title>Marius Elting - Webdeveloper - Home</title>
                <link rel="canonical" href="https://mariuselting.dev" />
                <meta name="description" content="I'm Marius Elting, this is my Portfolio. 
  Watch my TechStack, Projects and Contact me.
  I'm an aspiring Full Stack Web Developer using the MERN Stack. This is my Homepage" />
            </Helmet>

            <ThisIsMe />

            <TechStack />
            <ProjectOverwiew />
        </main>
    );
}

export default Home;