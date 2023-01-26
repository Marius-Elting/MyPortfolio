import { MovieMania1, PokeDex, WeatherApp, aosDataProject } from "../../Imports";
import "./SingleProject.css";
function SingleProject({ data, index }) {
    let MovieManiaImage = MovieMania1;
    let PokeDexImage = PokeDex;
    let WeatherAppImage = WeatherApp;
    return (
        <div key={index} className={`ProjectsOverview-ProjectWrapper`} {...aosDataProject} >
            <h3>{data.title}</h3>
            <img src={eval(data.image)} alt={data.headline}></img>
            <div className="ProjectsOverview-HoverDiv">
                <h4>{data.headline}</h4>
                <p>{data.description}</p>
                <a className="underlineHover" target="_blank" rel="noreferrer" href={data.link}>Click me to get to the Project</a>
            </div>
        </div>
    );
}

export default SingleProject;