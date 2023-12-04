import { Store as PullStateStore } from 'pullstate';

import { products } from '../mock';

const Store = new PullStateStore({
  safeAreaTop: 0,
  safeAreaBottom: 0,
  menuOpen: false,
  currentPage: null,
  products,
});

export default Store;
