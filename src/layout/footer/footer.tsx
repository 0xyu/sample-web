import "./footer.scss"
import Button from "../../components/button/button";

const Footer = ({onRerenderLayout}) => {
    return (
        <div className={"footer"}>
            <div className={"container-width"}>
                <span>Copyright @ 2023 </span>
                <Button onClick={onRerenderLayout}>Rerender Layout</Button>
            </div>
        </div>
    )
}

export default Footer
