export const EdgeFilterAction = (edgeFilter) => {
    console.log("entered");
    return {
        type: 'EDGE_FILTER_ACT',
        payload: edgeFilter
    }
};
