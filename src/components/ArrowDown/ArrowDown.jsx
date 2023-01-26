import "./ArrowDown.css";

function ArrowDown() {
    return (
        <div className="scrolldown" style={{ color: 'skyblue' }}>
            <div className="chevrons">
                <div className="chevrondown" />
                <div className="chevrondown" />
            </div>
        </div>
    );
}

export default ArrowDown;