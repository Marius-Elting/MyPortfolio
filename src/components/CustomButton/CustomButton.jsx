import { Link } from "react-router-dom";
import "./CustomButton.css";
function CustomButton({ children, linkTo, size }) {
    if (window.innerWidth <= 700) {
        size = size * 1.5
    }
    return (<div className="CustomButtonWrapper">
        <Link to={linkTo} className="underlineHover" >
            <p style={{
                "fontSize": size || 20
            }}>{children}</p>
        </Link>
    </div>);
}

export default CustomButton;