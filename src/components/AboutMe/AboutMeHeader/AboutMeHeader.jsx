import CustomButton from "../../CustomButton/CustomButton";
import "./AboutMeHeader.css";
import PlaceHolderPic from "../../../img/Placeholder.png";
import ArrowDown from "../../ArrowDown/ArrowDown";
import MyPicture from "../../Picture/Picture";


function AboutMeHeader() {
    return (
        <section id="AboutMeHeader-Wrapper">
            <section id="AboutMeHeader-LeftContainer">
                <h1>About Me</h1>
                <article id="AboutMeHeader-InfoWrapperOne">
                    <h2>My Past</h2>
                    <p className="AboutMeHeader-DetailText">After graduating from secondary school in 2018, I began training as an e-commerce merchant and successfully completed the program in 2021. I then worked for a year at the training company before seeking a new challenge. I discovered Super(Code)'s Full Stack Bootcamp and, after attending a workshop and researching further, I decided to enroll in the program.<br></br>
                        You can read more about my experiences at the bootcamp in the article "The Bootcamp."
                    </p>
                    <input type="checkbox" className='seeMore'></input>
                </article>
                <article id="AboutMeHeader-InfoWrapperTwo">
                    <h2>The Bootcamp</h2>
                    <p className="AboutMeHeader-DetailText"> The bootcamp began on September 19, 2022 and will end on February 23, 2023. From the start of the program, I found that I stood out among my peers and was able to learn quickly. I have a strong understanding of reading and writing code, with a particular interest in front-end development using React. I have been using my spare time to further develop my skills in this area. I am also excited to learn more about back-end development, as it allows for creating functional and data-driven applications. Within my group, I am one of the top performers and am able to help and explain code snippets to my peers. I am able to quickly read and understand code written by others.</p>
                    <input type="checkbox" className='seeMore'></input>
                </article>
            </section>
            <section id="AboutMeHeader-RightContainer">
                <MyPicture />
                <CustomButton size={25} linkTo="/contactme">Contact Me!</CustomButton>
            </section>
        </section>
    );
}

export default AboutMeHeader;