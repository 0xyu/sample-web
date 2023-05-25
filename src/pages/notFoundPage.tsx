import BasePage from "./basePage/basePage";
import {Link} from "react-router-dom";

const NotFoundPage = () => {
    return (
        <BasePage>
            <div style={{textAlign: "center", padding: 20}}>
                <h1>404 Not Found</h1>
                <Link to="/" style={{padding: 10}}>Home</Link>
            </div>
        </BasePage>
    );
};

export default NotFoundPage;
