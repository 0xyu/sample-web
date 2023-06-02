const cloneObject = (obj) => {
    if (typeof obj === "object") {
        return JSON.parse(JSON.stringify(obj));
    }

    return obj;
};

const sleep = async (millis: Number) => {
    return new Promise(resolve => setTimeout(resolve, millis));
};

const helpers = {
    cloneObject,
    sleep
};

export default helpers;
