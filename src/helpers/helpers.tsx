const cloneObject = (obj: object) => {
    if (typeof obj === "object") {
        return JSON.parse(JSON.stringify(obj));
    }

    return obj;
};

const sleep = async (millis: number) => {
    return new Promise(resolve => setTimeout(resolve, millis));
};

const helpers = {
    cloneObject,
    sleep
};

export default helpers;
