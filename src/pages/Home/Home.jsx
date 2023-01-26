import ProjectOverwiew from '../../components/Home/MyProjects/ProjectOverview';
import TechStack from "../../components/Home/TechStack/TechStack";
import ThisIsMe from "../../components/Home/ThisIsMe/ThisIsMe";
import "./Home.css";
function Home() {
    return (
        <main id="HomeWrapper">
            <ThisIsMe />

            <TechStack />
            <ProjectOverwiew />
        </main>
    );
}

export default Home;