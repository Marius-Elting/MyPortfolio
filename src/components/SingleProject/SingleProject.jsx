import { MovieMania1, PokeDex, WeatherApp, aosDataProject, SilentMoon } from "../../Imports";
import "./SingleProject.css";

function SingleProject({ data, index }) {
    let MovieManiaImage = MovieMania1;
    let PokeDexImage = PokeDex;
    let WeatherAppImage = WeatherApp;
    let SilentMoonImg = SilentMoon


    return (
        <div key={index} className={`SingleProject-ProjectWrapper`} {...aosDataProject} >
            <h3>{data.title}</h3>
            <img src={eval(data.image)} alt={data.title}></img>
            <div className="SingleProject-HoverDiv">
                <h4>{data.headline}</h4>
                <p>{data.description}</p>
                <p>{data.stack}</p>
                <a className="underlineHover" target="_blank" rel="noreferrer" href={data.link}>Click me to get to the Project</a>
            </div>
        </div>
    );
}

export default SingleProject;