import React, {useState} from "react";
import BasePage from "../basePage/basePage";
import "./HomePage.scss";
import Button from "../../components/button/button";
import helpers from "../../helpers/helpers";
import RenderHighlight from "../../components/renderHighlight";

const HomePage = (props: any) => {
    const [count, setCount] = useState(0);
    const [count2, setCount2] = useState(0);

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

    const handleIncreaseAllClick = () => {
        setCount(d => d + 1);
        setCount2(d => d + 1);
    };

    return (
        <BasePage {...props}>
            <RenderHighlight>
                <h3 style={{marginBottom: 5}}>A simple demo built with Vite + TypeScript + React + SCSS.</h3>
                <div style={{color: "#888"}}>Click the buttons below to highlight component re-rendering. </div>
            </RenderHighlight>
            <br/>
            <div className={"local-state"}>
                <RenderHighlight>
                    Count1: <span>{count} </span>
                    <div>
                        <Button onClick={handleIncreaseClick} outline={false}>Increase Count1</Button>
                    </div>
                    <div>
                        <Button onClick={handleAsyncIncreaseClick} outline={false}>Increase Count1 With Loader</Button>
                    </div>

                    <div>
                        <Button onClick={handleIncreaseAllClick} outline={false}>Increase Count1 & Count2</Button>
                    </div>
                </RenderHighlight>

                <br/>
                <RenderIfPropChangeMemo count2={count2}/>
                <br/>
                <hr/>
                <br/>
                <CountRender/>
            </div>
        </BasePage>
    );
};

const CountRender = () => {
    const [count, setCount] = useState(0);
    return (
        <RenderHighlight>
            Increase count and render only this component ({count})
            <div>
                <Button onClick={() => setCount(d => d + 1)} outline={false}>
                    Increase
                </Button>
            </div>
        </RenderHighlight>
    )
}

const RenderIfPropChange = ({count2}: { count2: number }) => {
    return (
        <RenderHighlight color={"red"}>
            <div>Only render me if count2 ({count2}) changed</div>
        </RenderHighlight>
    )
}

const RenderIfPropChangeMemo = React.memo(RenderIfPropChange, (prevProps: any, nextProps: any) => {
    return nextProps.count2 === prevProps.count2
});


export default HomePage;
