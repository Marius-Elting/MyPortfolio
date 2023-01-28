import { Helmet } from "react-helmet";
import { Link } from "react-router-dom";
import "./404Page.css"
function Error404Page() {
    return (<main id="ErrorPageMainWrapper">
        <Helmet>
            <meta charSet="utf-8" />
            <title>404 Page not found - Marius Elting - Webdeveloper</title>
            <link rel="canonical" href="https://mariuselting.dev/404Error" />
            <meta name="description" content="This Page does not exists - 404 Error" />
        </Helmet>
        <h1>404</h1>
        <p>This Page does not exists</p>
        <Link className="underlineHover" to="/">Go Back to Home</Link>
    </main>);
}

export default Error404Page;