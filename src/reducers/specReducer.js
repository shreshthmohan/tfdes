const specReducerDefaultState = {};

const specReducer = (state = specReducerDefaultState, action) => {
    switch (action.type) {
        case 'CREATE_SPEC' :
            return {
                spec:         action.spec,
            };
        case 'EDIT_SPEC' :
            return {
                spec:       { ...state.spec, ...action.spec},
            };
        /*case 'EDIT_CLR' :
            return {
                spec:       state.spec,
                clearances: {...state.clearances, ...action.clearances},
                tank_specs: state.tank_specs,
                current_flux: state.current_flux
            };
        case 'EDIT_TANK' :
            return {
                spec: state.spec,
                clearances: state.clearances,
                tank_specs: {...state.tank_specs, ...action.tank_specs},
                current_flux: state.current_flux
            };
        */
        default:
            return state;
    }
};

export default specReducer;
