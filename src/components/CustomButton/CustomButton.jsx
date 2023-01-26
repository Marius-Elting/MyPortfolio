import { Link } from "react-router-dom";
import "./CustomButton.css";
function CustomButton({ children, linkTo }) {
    return (<div className="CustomButtonWrapper">
        <Link to={linkTo} className="underlineHover" >
            <p>{children}</p>
        </Link>
    </div>);
}

export default CustomButton;