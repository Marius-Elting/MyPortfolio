import "./ThisIsMe.css";
import { PlaceHolderPic, MongoDBIcon, ExpressIcon, ReactIcon, NodeJSIcon } from "../../../Imports";
import CustomButton from "../../CustomButton/CustomButton";
import ArrowDown from "../../ArrowDown/ArrowDown";
import MyPicture from "../../Picture/Picture";
import Data from "../../../Languages.json"


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
                    <p><img src={MongoDBIcon} alt="MongoDB Logo"></img>MongoDB</p>
                    <p><img src={ExpressIcon} alt="Express Logo"></img>ExpressJS</p>
                    <p><img src={ReactIcon} alt="React logo"></img>ReactJS</p>
                    <p><img src={NodeJSIcon} alt="NodeJS Logo"></img>NodeJS</p>
                </article>
                <CustomButton size={20} linkTo="/contactme">{Other.contactButton}</CustomButton>
                <div>
                    <a title="My LinkedIn" target="_blanck" href="https://www.linkedin.com/in/marius-elting-a60959203/"><i className="uil uil-linkedin icons"></i></a>
                    <a title="My Github" target="_blanck" href="https://github.com/Marius-Elting"><i className="uil uil-github icons"></i></a>
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
