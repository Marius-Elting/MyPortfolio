import { PlaceHolderPic } from "../../Imports";
import "./Picture.css"
function MyPicture() {
    return (
        <div id="MyPictureWrapper">
            <img src={PlaceHolderPic} alt="This is Me"></img>
        </div>
    );
}

export default MyPicture;