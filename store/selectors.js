import { createSelector } from 'reselect';

const getState = state => state;

export const getHomeItems = createSelector(getState, state => state.homeItems);
export const getProducts = createSelector(getState, state => state.products);
export const getSettings = createSelector(getState, state => state.settings);
