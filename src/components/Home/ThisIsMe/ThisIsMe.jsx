import "./ThisIsMe.css";
import { PlaceHolderPic, MongoDBIcon, ExpressIcon, ReactIcon, NodeJSIcon } from "../../../Imports";
import CustomButton from "../../CustomButton/CustomButton";
import ArrowDown from "../../ArrowDown/ArrowDown";
import MyPicture from "../../Picture/Picture";
import Data from "../../../Languages.json"
import { GitHub, LinkedIn } from "../../../Imports";
import { GitHubLogo, LinkedInLogo } from "../../Logos/Logos";

function ThisIsMe() {
    const lang = sessionStorage.getItem("Language")
    const { Home, Other } = Data[lang]

    return (
        <section id="ThisIsMeWrapper">
            <article id="ThisIsMe-LeftContainer">
                <article id="ThisIsMe-Headline">
                    <h2>{Home.Headline}<span>{Home.Headlinesub1}</span><span>{Home.Headlinesub2}</span></h2>
                    <h3>{"<"}Full Stack Webdeveloper{"/>"}</h3>
                </article>
                <article id="ThisIsMe-TechStackImgWrapper">
                    <a href="#TechStack"><img src={MongoDBIcon} alt="MongoDB Logo"></img>MongoDB</a>
                    <a href="#TechStack"><img src={ExpressIcon} alt="Express Logo"></img>ExpressJS</a>
                    <a href="#TechStack"><img src={ReactIcon} alt="React logo"></img>ReactJS</a>
                    <a href="#TechStack"><img src={NodeJSIcon} alt="NodeJS Logo"></img>NodeJS</a>
                </article>
                <CustomButton size={20} linkTo="/contactme">{Other.contactButton}</CustomButton>
                <div>
                    <a className="ThisIsMe-LogoWrapper" title="My LinkedIn" target="_blanck" href="https://www.linkedin.com/in/marius-elting-a60959203/"><LinkedInLogo /></a>
                    <a className="ThisIsMe-LogoWrapper" title="My Github" target="_blanck" href="https://github.com/Marius-Elting"> <GitHubLogo /></a>
                </div>
            </article>
            <article id="ThisIsMe-RightContainer">
                <MyPicture />
            </article>
            <ArrowDown />
        </section>
    );
}

export default ThisIsMe;
