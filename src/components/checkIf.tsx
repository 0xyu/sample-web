const Check = (props: { if: boolean, children: any }) => {
    return props.if ? props.children : null;
}

export default Check;
