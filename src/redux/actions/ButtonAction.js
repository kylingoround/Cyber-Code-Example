export const ButtonAction = (id, score) => {
    return {
        type: 'BUTTON_ACT',
        payload: [id, score]
    }
};
