export const cloneObject = (obj) => {
    if (typeof obj === "object") {
        return JSON.parse(JSON.stringify(obj));
    }

    return obj;
};
