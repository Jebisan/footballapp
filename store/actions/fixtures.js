export const PREDICT = 'PREDICT';

export const predict = ({eventkey, prediction}) => {
    return { type: PREDICT, eventkey, prediction};
};