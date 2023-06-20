import clsx from "clsx";

const RenderHighlight = ({children, color}) => {
    return (
        <div key={Math.random()} className={clsx("ani-outline", color)}>
            {children}
        </div>
    )
};

export default RenderHighlight;
