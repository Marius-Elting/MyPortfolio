import "./ContactPage.css"
import { useState, useRef } from "react"
import { Link } from "react-router-dom"
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
            <h1>Contact Me!</h1>
            <section>
                <form className="ContactPage-FormWrapper" onSubmit={sendMail}>
                    <label htmlFor="yourName">Dein Name</label>
                    <input
                        id="yourName"
                        onChange={(e) => {
                            containsNumbers(e, e.target.value)
                        }}
                        ref={nameRef} type="text" name="senderName" placeholder="Your Name"
                    >
                    </input>
                    <p
                        style={{
                            display: nameStatus === "Error" ? "block" : "none",
                        }}
                    >
                        Namen dürfen keine Zahlen enthalten.
                    </p>
                    <label htmlFor="yourmail">Deine E-Mail</label>
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
                        style={{
                            display: emailStatus === "Error" ? "block" : "none",
                        }}
                    >
                        Bitte gib eine korrekte E-Mail ein.
                    </p>
                    <label htmlFor="yourSubject">Dein Anliegen</label>
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
                    <label htmlFor="yourMessage">Deine Nachricht</label>
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
                        <label htmlFor="acceptDatenschutz"><input ref={acceptPolicy} type="checkbox" id="acceptDatenschutz" />"Ich willige ein, dass Marius Elting meine personenbezogenen Daten (Name und E-Mail-Adresse) benutzen darf, um Kontakt mit mir aufzunehmen."</label>
                        <p>Mit dem Absenden dieser Anfrage bestätigen Sie, dass Sie die {<Link to="/privatepolicy">Datenschutzerklärung</Link>} gelesen zu haben."</p>
                    </div>
                    <button type="submit">Senden</button>
                </form>
            </section>
        </main>
    );
}

export default ContactPage;