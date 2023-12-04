import { createSelector } from 'reselect';

const getState = state => state;

export const getHomeItems = createSelector(getState, state => state.homeItems);
export const getPosts = createSelector(getState, state => state.posts);
export const getSettings = createSelector(getState, state => state.settings);
