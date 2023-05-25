import './App.scss'
import Layout from "./layout/layout.tsx";
import {BrowserRouter} from "react-router-dom";

function App() {
    return (
        <BrowserRouter>
            <Layout/>
        </BrowserRouter>
    )
}

export default App
