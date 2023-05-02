import CustomButton from "../../CustomButton/CustomButton";
import "./AboutMeHeader.css";
import MyPicture from "../../Picture/Picture";
import CV from "../../../assets/Marius_Elting_Lebenslauf.pdf"
import Data from "../../../Languages.json"

function AboutMeHeader() {
    const lang = sessionStorage.getItem("Language")
    const { AboutMe, Other } = Data[lang]
    return (
        <section id="AboutMeHeader-Wrapper">
            <section id="AboutMeHeader-LeftContainer">
                <h1>{AboutMe.AllHeadline}</h1>
                <article id="AboutMeHeader-InfoWrapperOne">
                    <h2>{AboutMe.MyPastHeadline}</h2>
                    <p className="AboutMeHeader-DetailText">{AboutMe.MyPast}
                    </p>
                    <input type="checkbox" className='seeMore'></input>
                </article>
                <article id="AboutMeHeader-InfoWrapperTwo">
                    <h2>{AboutMe.TheBootcampHeadline}</h2>
                    <p className="AboutMeHeader-DetailText"> {AboutMe.TheBootcamp}</p>
                    <input type="checkbox" className='seeMore'></input>
                </article>
            </section>
            <section id="AboutMeHeader-RightContainer">
                <MyPicture />
                <CustomButton size={25} linkTo="/contactme">{Other.contactButton}</CustomButton>
                <div className="CustomButtonWrapper">
                    <a href={CV} className="underlineHover downloadButton" download="">{Other.downloadCV}</a>
                </div>
            </section>
        </section>
    );
}

export default AboutMeHeader;