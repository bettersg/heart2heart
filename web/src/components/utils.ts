export const onChange = (context: any, name: string, newValue: any, callback?: any) => {
    context.setState({ [name]: { ...context.state[name], value: newValue } }, callback && callback);
}

export const setError = (context: any, name: string, error: string, callback?: any) => {
    context.setState({ [name]: { ...context.state[name], error } }, callback && callback);
}

export const validateForm = (context: any) => {
    const st = JSON.parse(JSON.stringify(context.state));
    let status = true;
    for (let key in st) {
        if (st.hasOwnProperty(key)) {
            const isRequired = st[key] ? st[key].required : false;
            if (isRequired) {
                const name = st[key].name;
                const value = st[key].value;
                const type = typeof value;
                if ((value === null || value === undefined || value.length === 0) && type !== 'number') {
                    status = false;
                    setError(context, name, 'error found');
                } else {
                    setError(context, name, '');
                }
            }
        }
    }
    return status;
}