import Routers from "../routers/routers.tsx";
import Header from "./header/header.tsx";
import Footer from "./footer/footer";

const Layout = (props: any) => {
    return (
        <div className={"layout"}>
            <Header/>
            <div className={"content"}>
                <Routers {...props}/>
            </div>
            <Footer/>
        </div>
    )
}

export default Layout
