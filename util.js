const normalizeCode = (code) => {
    return code.toString().toLocaleLowerCase().trim();
};

const randomArrayItem = (arr) => {
    return arr[Math.floor(Math.random()*arr.length)];
};

export {
    normalizeCode,
    randomArrayItem,
};