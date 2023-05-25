import {useState} from "react"
import routes from "../../routers/routes.js"
import {useNavigate} from "react-router-dom";
import clsx from "clsx";
import "./header.scss"

const Header = () => {
    return (
        <div className={"header"}>
            <div className={"container-width"}>
                <Navigation/>
            </div>
        </div>
    )
}

const Navigation: any = () => {
    const [activeLink, setActiveLink] = useState("");
    const navigate = useNavigate();

    const handleNavItemClick = (link: string) => {
        navigate(link);
        setActiveLink(link);
    };

    return routes.map((d) => {
        if (d.path === "*") {
            return null;
        }
        return (
            <NavItem link={d.path}
                     key={d.path}
                     onClick={handleNavItemClick}
                     isActive={activeLink === d.path}
                     name={d.name}/>
        );
    });
}

interface navItem {
    link: string,
    onClick: (...args: any[]) => void,
    isActive: boolean,
    name: string
}

const NavItem = ({link, onClick, isActive, name}: navItem) => {
    return (
        <div className={clsx("nav-item is-link", isActive && "_active")} onClick={() => onClick(link)}>
            {name}
        </div>
    )
}

export default Header
