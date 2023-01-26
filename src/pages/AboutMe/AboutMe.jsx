import "./AboutMe.css";
import PlaceHolderPic from "../../img/Placeholder.png";
import CustomButton from "../../components/CustomButton/CustomButton";
import AboutMeHeader from "../../components/AboutMe/AboutMeHeader/AboutMeHeader";
import TimeLine from "../../components/AboutMe/TimeLine/TimeLine";

function AboutMe() {
    return (<main id="AboutMe-Wrapper">
        <AboutMeHeader />
        {/* <TimeLine /> */}
    </main>
    );
}

export default AboutMe;