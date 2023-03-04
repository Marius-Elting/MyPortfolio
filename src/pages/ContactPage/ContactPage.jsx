import "./ContactPage.css";
import { useState, useRef } from "react";
import { Link } from "react-router-dom";
import MyPicture from "../../components/Picture/Picture";
import { Helmet } from "react-helmet";
import Data from "../../Languages.json";

function ContactPage() {
    const [emailStatus, setEmailStatus] = useState();
    const [nameStatus, setNameStatus] = useState();
    const emailRef = useRef();
    const subjectRef = useRef();
    const nameRef = useRef();
    const textRef = useRef();
    const acceptPolicy = useRef();

    const lang = sessionStorage.getItem("Language");
    const { ContactMe, Other } = Data[lang];

    const sendMail = (e) => {
        e.preventDefault();
        if (!emailRef.current.value) setEmailStatus("Error");
        if (!subjectRef.current.value) subjectRef.current.style.border = "3px solid red";
        if (!nameRef.current.value) nameRef.current.style.border = "3px solid red";
        if (!textRef.current.value) textRef.current.style.border = "3px solid red";
        if (!acceptPolicy.current.checked) acceptPolicy.current.style.outline = "3px solid red";

        if (!emailRef.current.value || !subjectRef.current.value || !nameRef.current.value || !textRef.current.value || !acceptPolicy.current.checked) return;
        const form = new FormData(e.target);
        fetch(`${process.env.REACT_APP_URL}/contactme`,
            {
                method: "POST",
                body: form
            }).then(res => res.json())
            .then(res => {
                if (res === "Email Error") {
                    setEmailStatus("Error");
                } else {
                    setEmailStatus("OK");
                    e.target.reset();
                }
            });
    };

    function isValidEmailAddress(address) {
        let re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        if (re.test(address)) {
            setEmailStatus("OK");
        } else {
            setEmailStatus("Error");
        }
    }

    function containsNumbers(e, str) {
        let re = /[0-9]/;
        if (!re.test(str) && e.target.value.length > 0) {
            e.target.style.border = "3px solid green";
            setNameStatus("OK");
        } else {
            e.target.style.border = "3px solid red";
            setNameStatus("Error");
        }
    }
    return (
        <main className="ContactPageWrapper">
            <Helmet>
                <meta charSet="utf-8" />
                <title>Contact Me - Marius Elting - Webdeveloper</title>
                <link rel="canonical" href="https://mariuselting.dev/contactme" />
                <meta name="description" content="I'm Marius Elting, this is my Portfolio. 
  Watch my TechStack, Projects and Contact me.
  I'm an aspiring Full Stack Web Developer using the MERN Stack. Contact me per Mail." />
            </Helmet>
            <section className="ContactPage-LeftContainer">
                <h1>{ContactMe.Headline}</h1>
                <form className="ContactPage-FormWrapper" onSubmit={sendMail}>
                    <label htmlFor="yourName">{ContactMe.YName}</label>
                    <input
                        id="yourName"
                        onChange={(e) => {
                            containsNumbers(e, e.target.value);
                        }}
                        ref={nameRef} type="text" name="senderName" placeholder={ContactMe.YName}
                    >
                    </input>
                    <p
                        className="errorMsg"

                        style={{
                            display: nameStatus === "Error" ? "block" : "none",
                        }}
                    >
                        {ContactMe.nameError}
                    </p>
                    <label htmlFor="yourmail">{ContactMe.YEmail}</label>

                    <input
                        id="yourmail"
                        onChange={(e) => isValidEmailAddress(e.target.value)}
                        style={{
                            border: emailStatus === "Error" ? "3px solid red" : emailStatus === "OK" ? "3px solid green" : ""
                        }}
                        type="text" name="from" placeholder={ContactMe.YEmail} ref={emailRef}
                    >
                    </input>
                    <p
                        className="errorMsg"
                        style={{
                            display: emailStatus === "Error" ? "block" : "none",
                        }}
                    >
                        {ContactMe.emailError}
                    </p>
                    <label htmlFor="yourSubject">{ContactMe.YSubject}</label>
                    <input
                        id="yourSubject"
                        onChange={(e) => {
                            if (e.target.value.length > 0) {
                                e.target.style.border = "3px solid green";
                            } else {
                                e.target.style.border = "3px solid red";
                            }
                        }}
                        ref={subjectRef} type="text" name="subject" placeholder={ContactMe.YSubject}
                    >
                    </input>
                    <label htmlFor="yourMessage">{ContactMe.YMessage}</label>
                    <textarea
                        id="yourMessage"
                        onChange={(e) => {
                            if (e.target.value.length > 0) {
                                e.target.style.border = "3px solid green";
                            } else {
                                e.target.style.border = "3px solid red";
                            }
                        }}
                        ref={textRef} name="message" placeholder={ContactMe.YMessage}
                    >
                    </textarea>
                    <div className="ContactPage-acceptData">
                        <label htmlFor="acceptDatenschutz"><input ref={acceptPolicy} type="checkbox" id="acceptDatenschutz" />{ContactMe.Acceptpolicy}</label>
                        <p>{ContactMe.Infopolicy} {<Link to="/privatepolicy">{ContactMe.policyLink}</Link>} {lang === "German" ? "gelesen haben." : ""}</p>
                    </div>
                    {/* <CustomButton type={"submit"} size={25} linkTo="/contactme">Send</CustomButton> */}
                    <button type="submit">Send</button>
                </form>
            </section>
            <section className="ContactPage-RightContainer">
                <article id="ThisIsMe-RightContainer">
                    <MyPicture />
                </article>
                <article>
                    <a title="My LinkedIn" target="_blanck" href="https://www.linkedin.com/in/marius-elting-a60959203/"><i className="uil uil-linkedin icons"></i></a>
                    <a title="My Github" target="_blanck" href="https://github.com/Marius-Elting"><i className="uil uil-github icons"></i></a>
                </article>
                <article>
                    <a href="mailto:contact@mariuselting.dev" className="underlineHover">contact@mariuselting.dev</a>
                </article>
            </section>
        </main>
    );
}

export default ContactPage;