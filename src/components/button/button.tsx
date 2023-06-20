import React, {forwardRef, useEffect, useRef, useState} from "react";
import "./button.scss";
import clsx from 'clsx';

type onClickHandler = (event: React.MouseEvent<HTMLElement>) => any

const Button = forwardRef((props: {
    children: any
    onClick?: onClickHandler,
    onMouseEnter?: onClickHandler,
    onMouseLeave?: onClickHandler,
    color?: string,
    outline?: boolean,
    size?: string,
    style?: object,
    disabled?: boolean,
    className?: string,
}, ref: any) => {
    const {
        children,
        onClick,
        onMouseEnter,
        onMouseLeave,
        color = "primary",
        outline = false,
        size,
        style,
        disabled,
        className,
    } = props;
    const [isLoading, setIsLoading] = useState(false);
    const _isMounted = useRef(true);
    useEffect(() => {
        _isMounted.current = true;
        return () => {
            _isMounted.current = false;
        };
    }, []);

    const handleClick = async (e: any) => {
        e.preventDefault();
        if (!_isMounted.current) {
            return;
        }
        setIsLoading(true);
        try {
            typeof onClick === "function" && await onClick(e);
        } catch (err) {
            throw e;
        } finally {
            if (_isMounted.current) {
                setIsLoading(false);
            }
        }
    };

    const handleMouseEnter = (e: any) => {
        typeof onMouseEnter === "function" && onMouseEnter(e);
    };

    const handleMouseLeave = (e: any) => {
        typeof onMouseLeave === "function" && onMouseLeave(e);
    };

    return (
        <button
            className={clsx("btn", _getBtnColorClassName(color), outline && "_outline", _getBtnSizeClassName(size), disabled && "disabled", isLoading && "_loading", className)}
            style={style}
            ref={ref}
            color={color}
            disabled={disabled || isLoading}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
            onClick={handleClick}>
            {children}
        </button>
    );
});

const validColors = ["primary", "secondary", "danger", "info", "gray"];
const _getBtnColorClassName = (color = "primary") => {
    return validColors.includes(color) ? `btn-${color}` : "btn-primary";
};

const validSizes = ["lg", "md", "sm"];
const _getBtnSizeClassName = (size = "md") => {
    return validSizes.includes(size) ? `btn-${size}` : "";
};

export default Button;
