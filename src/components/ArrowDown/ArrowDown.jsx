import "./ArrowDown.css";
import { Link } from "react-router-dom";
function ArrowDown() {
    return (
        <a href="#ProjectsOverviewWrapper" className="scrolldown" style={{ color: 'skyblue' }}>
            <div className="chevrons">
                <div className="chevrondown" />
                <div className="chevrondown" />
            </div>
        </a>
    );
}

export default ArrowDown;