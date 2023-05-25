import {useState} from "react";
import BasePage from "../basePage/basePage";
import "./HomePage.scss";

const HomePage = (props: any) => {
    const [count, setCount] = useState(0);

    const handleIncreaseClick = () => {
        setCount(d => d + 1);
    };

    return (
        <BasePage {...props}>
            <h3>
                Just a simple code write with Vite + Typescript + React + SCSS
            </h3>

            <div className={"local-state"}>
                Local State Count: <span>{count} </span>
                <button onClick={handleIncreaseClick}>Increase</button>
            </div>
        </BasePage>
    );
};

export default HomePage;
