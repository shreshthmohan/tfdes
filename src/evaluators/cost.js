
const evalCostParams = (spec) => {
    let cost = {}; 

    cost.cost_cu_lt               = 0;
    cost.cost_cu_ht               = 0;
    cost.cost_al_lt               = 0;
    cost.cost_al_ht               = 0;
    cost.cost_crgo                = 0;
    cost.cost_oil                 = 0;
    cost.cost_steel               = 0;
    cost.cost_radiator            = 0;
    cost.cost_radiator_elleptical = 0;

    // TODO restore existing cost data
    
    if (spec.winding_conductor_ht === 'aluminium') {
        cost.cost_lt = cost.cost_al_lt; // might need to change this based on TODO
                                           // above
        cost.cost_ht = cost.cost_al_ht;
    } else {
        cost.cost_lt = cost.cost_cu_lt;
        cost.cost_ht = cost.cost_cu_ht;
    }

    if (spec.radiator_type === 'elleptical') {
        cost.cost_radiator = cost.cost_radiator_elleptical; // this might change too
                                                            // according to 1st TODO
    }
    console.log('cost params');

    return cost;
};

export default evalCostParams;
