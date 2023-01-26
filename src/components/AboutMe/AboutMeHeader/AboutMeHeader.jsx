import CustomButton from "../../CustomButton/CustomButton";
import "./AboutMeHeader.css";
import PlaceHolderPic from "../../../img/Placeholder.png";
import ArrowDown from "../../ArrowDown/ArrowDown";


function AboutMeHeader() {
    return (<section id="AboutMeHeader-Wrapper">
        <section id="AboutMeHeader-LeftContainer">
            <h1>About Me</h1>
            <article id="AboutMeHeader-InfoWrapperOne">
                <h2>My Past</h2>
                <p className="AboutMeHeader-DetailText">After graduating from secondary school , I started training as an e-commerce merchant in 2018 and successfully completed it in 2021. After the training I was taken over and worked for another year at my training company. After one year, I started looking for a new job, unfortunately I did not find it. In the meantime, I came across Super(Code)'s Full Stack Bootcamp, looked into it, attended their workshop, and signed up for the bootcamp as a result.
                    Early on in the bootcamp, I noticed that I was comfortable with web development and could quickly learn and understand code from other participants. Furthermore, I was able to help the other participants a lot because I was always able to complete my tasks quickly. In the bootcamp, I was able to gain a lot of knowledge in both front-end and back-end.
                </p>
                <input type="checkbox" className='seeMore'></input>
            </article>
            <article id="AboutMeHeader-InfoWrapperTwo">
                <h2>The Bootcamp</h2>
                <p className="AboutMeHeader-DetailText">In my year as an e-commerce merchant, I realized that the profession was not for me, I looked around and came across coding bootcamps. I did more research and finally landed on Super(Code). The bootcamp started on 9/19/2022 and ends on 2/23/2023, I noticed early on in the bootcamp that I stood out from the group and learned very quickly and have a good understanding of reading and writing code. The front-end with React suits me very well and I am still learning a lot in my spare time, which is not taught in the bootcamp. The backend is something I've been looking forward to for a long time, as it gives apps real utility, data can be saved and doesn't expire on reload. In my group I am one of the best and can help the other participants a lot and explain code snippets to them.</p>
                {/* <p>GERMAN VERSION:
        In meinem Jahr als E-Commerce Kaufmann merkte ich, dass der Beruf nichts für mich ist, ich schaute mich um und bin auf Coding Bootcamps gestoßen. Ich habe mich weiter informiert und bin schlussendlich bei Super(Code) gelandet. Das Bootcamp begann am 19.09.2022 und endet am 23.02.2023. Schon früh im Bootcamp bemerkte ich, dass ich aus der Gruppe hinaus stach und sehr schnell dazulernte und ein gutes Verständnis für Code lesen und schreiben habe. Das Front-End mit React liegt mir sehr gut und ich lerne in meiner Freizeit noch viel dazu, was im Bootcamp nicht gelehrt wird. Auf das Backend habe ich mich schon lange gefreut, da so die Apps einen wirklichen Nutzen bekommen, Daten können abgespeichert werden und verfallen nicht beim Reload. In meiner Gruppe gehöre ich zu den besten und kann den anderen Teilnehmern viel weiterhelfen und ihnen Code Snippets erklären.</p> */}
                <input type="checkbox" className='seeMore'></input>
            </article>
        </section>
        <section id="AboutMeHeader-RightContainer">
            <img src={PlaceHolderPic} alt="This is Me"></img>
            <CustomButton linkTo="/contactme">Contact Me!</CustomButton>
        </section>

    </section>);
}

export default AboutMeHeader;