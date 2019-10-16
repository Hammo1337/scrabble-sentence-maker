const range = (n) => {
    return Array(n).fill(0);
};
  
const createMatrix = (dim, value) => {
    return range(dim).map(v => range(dim).map(v => value));
};

module.exports = {
    range,
    createMatrix
}