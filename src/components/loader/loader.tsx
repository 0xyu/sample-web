import "./loader.scss";
import clsx from "clsx";

interface loader {
    size?: number,
    style?: object,
    isFullLoader?: boolean,
    className?: string,
    isLoading: boolean
}

const Loader = ({size = 64, style, isFullLoader, className, isLoading = true}: loader) => {
    const containerStyle = {
        width: size + 3,
        height: size + 3,
    };
    const divStyle = {
        width: size,
        height: size,
        borderWidth: size / 9
    };

    const node = (
        <div className={clsx("lds-ring b2loader", !isLoading && "noloading", className)} style={style}>
            <div className={"lds-ring-inner"} style={containerStyle}>
                <div style={divStyle} className={"spinner"}/>
                <div style={divStyle} className={"spinner"}/>
                <div style={divStyle} className={"spinner"}/>
                <div style={divStyle} className={"spinner"}/>
            </div>
        </div>
    );

    if (isFullLoader) {
        return <div className={clsx("full-loader", className)}>
            {node}
        </div>;
    }
    return node;
};

export default Loader;
