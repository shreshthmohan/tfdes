const specReducerDefaultState = {
    storedDesigns: [],
    loadedDesign: {}
};

// action are 'dispatch'ed
const specReducer = (state = specReducerDefaultState, action) => {
    switch (action.type) {
        case 'CREATE_SPEC' :
            const design = {id: action.spec.id};
            return {
                storedDesigns :     [ ...state.storedDesigns, design], 
                loadedDesign:       action.spec
            };
        case 'EDIT_SPEC' :
            return {
                storedDesigns:      state.storedDesigns,
                loadedDesign:       { ...state.spec, ...action.spec}
            };
        case 'LOAD_SPEC' :
            return {
                storedDesigns:      state.storedDesigns,
                loadedDesign:       action.spec
            };
        default:
            return state;
    }
};

export default specReducer;
