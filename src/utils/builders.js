export const ValuesBuilder = (values, config) => {
    const {name, value} = config;
    values[name]=value;
    return values;
}

