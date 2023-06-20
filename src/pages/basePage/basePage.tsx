import "./basePage.scss";
import React from "react";
import Check from "../../components/checkIf";
import Loader from "../../components/loader/loader";
import RenderHighlight from "../../components/renderHighlight";

interface basePage {
    isLoading?: boolean,
    title?: string,
    children?: React.ReactNode,
    className?: string
}

const BasePageContent = ({isLoading, title, children, className = "",}: basePage) => {
    const bodyNode: any[] = [];
    let headerNode;
    React.Children.forEach(children, (child: any) => {
        if (child?.type?.displayName === "BasePageHeader") {
            headerNode = child;
        } else {
            bodyNode.push(child);
        }
    });

    return (
        <div className={`base-page container-width ${className}`}>
            <Check if={!!title || !!headerNode}>
                <RenderHighlight>
                    <h1>{title}</h1>
                    {headerNode}
                </RenderHighlight>
            </Check>

            <div className={"base-page-body"}>
                {isLoading ? <Loader isFullLoader={true} isLoading={true}/> :
                    // <RenderHighlight color={"green"}>
                        bodyNode
                    // </RenderHighlight>
                }
            </div>
        </div>
    );
};

// optimize rendering by return cached component if not active
const BasePage = React.memo(BasePageContent, (prevProps: any, nextProps: any) => {
    return nextProps.active === false;
});

export default BasePage;
