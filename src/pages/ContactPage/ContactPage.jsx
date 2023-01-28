import "./ContactPage.css"
import { useState, useRef } from "react"
import { Link } from "react-router-dom"
import MyPicture from "../../components/Picture/Picture"
import CustomButton from "../../components/CustomButton/CustomButton"

function ContactPage() {
    const [emailStatus, setEmailStatus] = useState()
    const [nameStatus, setNameStatus] = useState()
    const emailRef = useRef()
    const subjectRef = useRef()
    const nameRef = useRef()
    const textRef = useRef()
    const acceptPolicy = useRef()


    const sendMail = (e) => {
        e.preventDefault()
        if (!emailRef.current.value) setEmailStatus("Error")
        if (!subjectRef.current.value) subjectRef.current.style.border = "3px solid red"
        if (!nameRef.current.value) nameRef.current.style.border = "3px solid red"
        if (!textRef.current.value) textRef.current.style.border = "3px solid red"
        if (!acceptPolicy.current.checked) acceptPolicy.current.style.outline = "3px solid red"

        if (!emailRef.current.value || !subjectRef.current.value || !nameRef.current.value || !textRef.current.value || !acceptPolicy.current.checked) return
        const form = new FormData(e.target)
        fetch(`${process.env.REACT_APP_URL}/contactme`,
            {
                method: "POST",
                body: form
            }).then(res => res.json())
            .then(res => {
                if (res === "Email Error") {
                    setEmailStatus("Error")
                } else {
                    setEmailStatus("OK")
                    e.target.reset()
                }
            })
    }

    function isValidEmailAddress(address) {
        let re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        if (re.test(address)) {
            setEmailStatus("OK")
        } else {
            setEmailStatus("Error")
        }
    }

    function containsNumbers(e, str) {
        let re = /[0-9]/
        if (!re.test(str) && e.target.value.length > 0) {
            e.target.style.border = "3px solid green"
            setNameStatus("OK")
        } else {
            e.target.style.border = "3px solid red"
            setNameStatus("Error")
        }
    }
    return (
        <main className="ContactPageWrapper">
            <section className="ContactPage-LeftContainer">
                <h1>Contact Me!</h1>
                <form className="ContactPage-FormWrapper" onSubmit={sendMail}>
                    <label htmlFor="yourName">Your Name</label>
                    <input
                        id="yourName"
                        onChange={(e) => {
                            containsNumbers(e, e.target.value)
                        }}
                        ref={nameRef} type="text" name="senderName" placeholder="Your Name"
                    >
                    </input>
                    <p
                        className="errorMsg"

                        style={{
                            display: nameStatus === "Error" ? "block" : "none",
                        }}
                    >
                        Names can not contain numbers.
                    </p>
                    <label htmlFor="yourmail">Your E-Mail</label>

                    <input
                        id="yourmail"
                        onChange={(e) => isValidEmailAddress(e.target.value)}
                        style={{
                            border: emailStatus === "Error" ? "3px solid red" : emailStatus === "OK" ? "3px solid green" : ""
                        }}
                        type="text" name="from" placeholder="Your E-Mail" ref={emailRef}
                    >
                    </input>
                    <p
                        className="errorMsg"
                        style={{
                            display: emailStatus === "Error" ? "block" : "none",
                        }}
                    >
                        Please enter a valid E-Mail.
                    </p>
                    <label htmlFor="yourSubject">Your Subject</label>
                    <input
                        id="yourSubject"
                        onChange={(e) => {
                            if (e.target.value.length > 0) {
                                e.target.style.border = "3px solid green"
                            } else {
                                e.target.style.border = "3px solid red"
                            }
                        }}
                        ref={subjectRef} type="text" name="subject" placeholder="Your Subject"
                    >
                    </input>
                    <label htmlFor="yourMessage">Your Message</label>
                    <textarea
                        id="yourMessage"
                        onChange={(e) => {
                            if (e.target.value.length > 0) {
                                e.target.style.border = "3px solid green"
                            } else {
                                e.target.style.border = "3px solid red"
                            }
                        }}
                        ref={textRef} name="message" placeholder="Your Message"
                    >
                    </textarea>
                    <div className="ContactPage-acceptData">
                        <label htmlFor="acceptDatenschutz"><input ref={acceptPolicy} type="checkbox" id="acceptDatenschutz" />I agree that Marius Elting may use my personal data (name and e-mail address) to contact me.</label>
                        <p>By submitting this request, you acknowledge that you have read the {<Link to="/privatepolicy">Privacy Policy.</Link>}</p>
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