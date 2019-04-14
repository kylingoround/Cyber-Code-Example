export const UpdateAction = (data) => {
    console.log(data);
    return {
        type: 'UPDATE_DEPT_ACT',
        payload: data
    }
};
