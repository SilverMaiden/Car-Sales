export const ADD = 'ADD';

export const addFeature = item => {
    // dipsatch an action here to add an item
    return {
        type: ADD,
        payload: item
    }
  };

export const REMOVE = 'REMOVE';

export const removeFeature = item => {
    return {
        type: REMOVE,
        payload: item
    }
};
