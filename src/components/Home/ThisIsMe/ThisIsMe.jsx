import "./ThisIsMe.css";
import { PlaceHolderPic, MongoDBIcon, ExpressIcon, ReactIcon, NodeJSIcon } from "../../../Imports";
import CustomButton from "../../CustomButton/CustomButton";
import ArrowDown from "../../ArrowDown/ArrowDown";

function ThisIsMe() {
    return (
        <section id="ThisIsMeWrapper">
            <article id="ThisIsMe-LeftContainer">
                <article id="ThisIsMe-Headline">
                    <h2>Hi,<span>I'm</span><span>Marius</span></h2>
                    <h3>{"<"}Full Stack Webdeveloper{"/>"}</h3>
                </article>
                <article id="ThisIsMe-TechStackImgWrapper">
                    <img src={MongoDBIcon} alt="MongoDB Logo"></img>
                    <img src={ExpressIcon} alt="Express Logo"></img>
                    <img src={ReactIcon} alt="React logo"></img>
                    <img src={NodeJSIcon} alt="NodeJS Logo"></img>
                    <p>MongoDB</p>
                    <p>ExpressJS</p>
                    <p>ReactJS</p>
                    <p>NodeJS</p>
                </article>
                <CustomButton linkTo="/contactme">Contact Me!</CustomButton>
                <div>
                    <a title="My LinkedIn" target="_blanck" href="https://www.linkedin.com/in/marius-elting-a60959203/"><i className="uil uil-linkedin icons"></i></a>
                    <a title="My Github" target="_blanck" href="https://github.com/Marius-Elting"><i className="uil uil-github icons"></i></a>
                </div>
            </article>
            <article id="ThisIsMe-RightContainer">
                <div>
                    <img src={PlaceHolderPic} alt="This is Me"></img>
                </div>
            </article>
            <ArrowDown />
        </section>
    );
}

export default ThisIsMe;
