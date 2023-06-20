import Routers from "../routers/routers.tsx";
import Header from "./header/header.tsx";
import Footer from "./footer/footer";
import RenderHighlight from "../components/renderHighlight"
import {useState} from "react";

const Layout = (props: any) => {
    const [render, setRender] = useState(0)

    const handleRerenderLayout = () => {
        setRender(d => d + 1)
    }

    return (
        <div className={"layout"}>
            <RenderHighlight color={"white"}>
                <Header/>
            </RenderHighlight>

            <div className={"content"}>
                <RenderHighlight color={"white"}>
                    <Routers {...props}/>
                </RenderHighlight>
            </div>

            <RenderHighlight color={"white"}>
                <Footer onRerenderLayout={handleRerenderLayout}/>
            </RenderHighlight>
        </div>
    )
}

export default Layout
