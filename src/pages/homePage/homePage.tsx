import {useState} from "react";
import BasePage from "../basePage/basePage";
import "./HomePage.scss";
import Button from "../../components/button/button";
import helpers from "../../helpers/helpers";

const HomePage = (props: any) => {
    const [count, setCount] = useState(0);

    const handleIncreaseClick = () => {
        setCount(d => d + 1);
    };

    const handleAsyncIncreaseClick = async () => {
        try {
            await helpers.sleep(1000)
            setCount(d => d + 1);
        } catch (e) {
            alert(e)
        }
    };

    return (
        <BasePage {...props}>
            <h3>
                Just a simple code write with Vite + Typescript + React + SCSS
            </h3>

            <div className={"local-state"}>
                Local State Count: <span>{count} </span>
                <div>
                    <Button onClick={handleIncreaseClick} outline={false}>Increase</Button>
                </div>
                <div>
                    <Button onClick={handleAsyncIncreaseClick} outline={false}>Increase With Loader</Button>
                </div>
            </div>
        </BasePage>
    );
};

export default HomePage;
