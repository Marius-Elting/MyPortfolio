import { Link } from "react-router-dom";
import "./404Page.css"
function Error404Page() {
    return (<main id="ErrorPageMainWrapper">
        <h1>404</h1>
        <p>This Page does not exists</p>
        <Link className="underlineHover" to="/">Go Back to Home</Link>
    </main>);
}

export default Error404Page;