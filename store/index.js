import { Store as PullStateStore } from 'pullstate';

import { posts, homeItems } from '../mock';

const Store = new PullStateStore({
  safeAreaTop: 0,
  safeAreaBottom: 0,
  menuOpen: false,
  currentPage: null,
  homeItems,
  posts,
});

export default Store;
