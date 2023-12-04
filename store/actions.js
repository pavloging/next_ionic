import Store from '.';

export const setMenuOpen = open => {
  Store.update(s => {
    s.menuOpen = open;
  });
};

export const setSettings = settings => {
  Store.update(s => {
    s.settings = settings;
  });
};

// App-specific actions

export const setDone = (list, item, done) => {
  Store.update((s, o) => {
    const listIndex = o.products.findIndex(l => l === list);
    const itemIndex = o.products[listIndex].items.findIndex(i => i === item);
    s.products[listIndex].items[itemIndex].done = done;
    if (list === o.selectedList) {
      s.selectedList = s.products[listIndex];
    }
  });
};
