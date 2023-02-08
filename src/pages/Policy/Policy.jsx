import "./Policy.css"
import Data from "../../Languages.json"

function DataPolicy() {

    const lang = sessionStorage.getItem("Language")
    const { Privacy } = Data[lang]
    return (
        <main className="PolicyWrapper">
            <h1>{Privacy.Headline}</h1>
            <section>
                <p>{Privacy.Text}</p>
            </section>
        </main>
    );
}

export default DataPolicy