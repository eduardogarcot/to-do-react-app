export const idGenerator = (colecction) => {
    const collection = require(`./mocks/${colecction}.json`);
    const { id } = collection[collection.length-1];  
    const result = +id + 1;
    return result;
}; 