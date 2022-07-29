import * as Yup from 'yup';

export const ValuesBuilder = (values, config) => {
    const {name, value} = config;
    values[name]=value;
    return values;
}

export const SchemaBuilder = (schema, config) => {
    const {name, options} = config;
    switch (name) {
        case 'title':
            schema[name] = Yup.string().min(5, 'Too Short!').max(50, 'Too Long!').required('The Title is Required');
            break;
        case 'deadlineDate':
            schema[name] = Yup.date().required('Required').min(new Date(), "Should be greater");
            break;
        case 'leaderName':
            schema[name] = Yup.string().min(5, 'Too Short!').max(50, 'Too Long!').required('The TName of the Leader is Required');
            break;
        default:
            break;
    }
    return schema;
}

