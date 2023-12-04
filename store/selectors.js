import { createSelector } from 'reselect';

const getState = state => state;

export const getProducts = createSelector(getState, state => state.products);
export const getSettings = createSelector(getState, state => state.settings);
