import "./TimeLine.css";
import Arrow from "../../../img/svg/Arrow.svg";
import ArrowShort from "../../../img/svg/ArrowShort.svg";
import { aosDataProject } from "../../../Imports";
import { useRef } from "react";

function TimeLine() {
    const secSInfo = useRef();
    const TraiInfo = useRef();
    const WorkInfo = useRef();
    const BootInfo = useRef();
    const getDate = (year, month, date) => new Date(year, month, date).toLocaleDateString();

    return (
        <section id="TimeLine-Wrapper">
            <h1 >My Timeline</h1>
            <div id="TimeLine-LineWrapper">
                <article
                    onMouseEnter={() => secSInfo.current.style.opacity = "1"}
                    onMouseLeave={() => secSInfo.current.style.opacity = "0"}
                    {...aosDataProject}
                >
                    <h2>Secondary School</h2>
                    <p>{getDate(2012, 7, 1)}{<img src={ArrowShort} alt="short Arrow"></img>} {getDate(2018, 5, 29)}</p>
                </article>
                <img {...aosDataProject} src={Arrow} alt="Arrow"></img>
                <article
                    onMouseEnter={() => TraiInfo.current.style.opacity = "1"}
                    onMouseLeave={() => TraiInfo.current.style.opacity = "0"}
                    {...aosDataProject}
                >
                    <h2>Training</h2>
                    <p>{getDate(2018, 7, 1)} {<img src={ArrowShort} alt="short Arrow"></img>}{getDate(2021, 5, 14)}</p>
                </article>
                <img {...aosDataProject} src={Arrow} alt="Arrow"></img>
                <article
                    onMouseEnter={() => WorkInfo.current.style.opacity = "1"}
                    onMouseLeave={() => WorkInfo.current.style.opacity = "0"}
                    {...aosDataProject}
                >
                    <h2>Work</h2>
                    <p>{getDate(2021, 5, 15)} {<img src={ArrowShort} alt="short Arrow"></img>}{getDate(2022, 6, 31)}</p>
                </article>
                <img {...aosDataProject} src={Arrow} alt="Arrow"></img>
                <article
                    onMouseEnter={() => BootInfo.current.style.opacity = "1"}
                    onMouseLeave={() => BootInfo.current.style.opacity = "0"}
                    {...aosDataProject}
                >
                    <h2>BootCamp</h2>
                    <p>{getDate(2022, 8, 19)}{<img src={ArrowShort} alt="short Arrow"></img>} {getDate(2023, 1, 23)}</p>
                </article>
            </div>
            <article className="TimeLine-InfoWrapper">
                <div ref={secSInfo} className="TimeLine-SecSInfo">
                    <h3>Secondary School</h3>
                    <p>{getDate(2012, 7, 1)}{<img src={ArrowShort} alt="short Arrow"></img>} {getDate(2018, 5, 29)}</p>
                    <p>From 01.08.2012 to 29.06.2018 I went to the Israel van Meckenem Realschule in Bocholt.</p>
                    {/* <p>Vom 01.08.2012 bis zum 29.06.2018 ging ich zur Israel van Meckenem Realschule in Bocholt.</p> */}
                </div>
                <div ref={TraiInfo} className="TimeLine-TraiInfo">
                    <h3>Training</h3>
                    <p>{getDate(2018, 7, 1)} {<img src={ArrowShort} alt="short Arrow"></img>}{getDate(2021, 5, 14)}</p>
                    <p>On 01.08.2018, I began my training as a merchant in e-commerce. I successfully completed this on 14.06.2021.</p>
                    {/* <p>Am 01.08.2018 begann ich meine Ausbildung zum Kaufmann im E-Commerce. Diese Schloss ich am 14.06.2021 erfolgreich ab.</p> */}
                </div>
                <div ref={WorkInfo} className="TimeLine-WorkInfo">
                    <h3>Work</h3>
                    <p>{getDate(2021, 5, 15)} {<img src={ArrowShort} alt="short Arrow"></img>}{getDate(2022, 6, 31)}</p>
                    <p>After my apprenticeship, I was taken on by my training company and worked there for another year.</p>
                    {/* <p>Nach meiner Ausbildung wurde ich von meinem Ausbildungsbetrieb übernommen und habe ein weiteres Jahr dort gearbeitet.</p> */}
                </div>
                <div ref={BootInfo} className="TimeLine-BootInfo">
                    <h3>Bootcamp</h3>
                    <p>{getDate(2022, 8, 19)}{<img src={ArrowShort} alt="short Arrow"></img>} {getDate(2023, 1, 23)}</p>
                    <p>After my year as an employed I was looking for a new challenge and came across Coding Bootcamps. This I started on 09/19/2022 and will finish on 02/23/2023.</p>
                    {/* <p>Nach meinem Jahr als angestellter suchte ich eine neue Herausforderung und bin auf Coding Bootcamps aufmerksam geworden. Dies habe ich am 19.09.2022 begonnen und werde es am 23.02.2023 beenden</p> */}
                </div>
            </article>
        </section>
    );
}

export default TimeLine;