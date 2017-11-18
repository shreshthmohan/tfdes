// data has two objects: spec and clearances
export const createSpec = (data) => {
    return {
        type: 'CREATE_SPEC',
        spec: data
    };
};

export const editSpec = (data) => {
    return {
        type: 'EDIT_SPEC',
        spec: data

    };
}; 

//export const editClearances = (data) => {
//    return {
//        type: 'EDIT_CLR',
//        clearances: data
//    };
//};
//
//export const editTankSpecs = (data) => {
//    return {
//        type: 'EDIT_TANK',
//        tank_specs: data
//    };
//};
