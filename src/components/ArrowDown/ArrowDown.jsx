import "./ArrowDown.css";

function ArrowDown() {
    return (
        <a href="#TechStack" className="scrolldown" style={{ color: 'skyblue' }}>
            <div className="chevrons">
                <div className="chevrondown" />
                <div className="chevrondown" />
            </div>
        </a>
    );
}

export default ArrowDown;