// data has two objects: spec and clearances
export const createSpec = (data) => {

    const storedDesigns = localStorage.getItem('storedDesigns');

    if (!storedDesigns) {
        localStorage.setItem('storedDesigns', JSON.stringify([{id : data.id}]));
    } else {
        localStorage.setItem('storedDesigns', JSON.stringify(
            [
                ...(JSON.parse(storedDesigns)),
                {id : data.id}
            ]
        ));
    }

    localStorage.setItem(data.id, JSON.stringify(data));

    return {
        type: 'CREATE_SPEC',
        spec: data
    };
};

export const editSpec = (data) => {

    const design = JSON.parse(localStorage.getItem(data.id));

    localStorage.setItem(data.id, JSON.stringify({
        ...design, ...data
    }));

    return {
        type: 'EDIT_SPEC',
        spec: data
    };
}; 

// load Design
export const loadSpec = (id) => {
    const data = localStorage.getItem(id);
    return {
        type: 'LOAD_SPEC',
        spec: data
    };
}
