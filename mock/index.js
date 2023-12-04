export const images = [
  '/img/c1.avif',
  '/img/c2.avif',
  '/img/c3.avif',
];

export const homeItems = [
  {
    title: 'Exploring Maui',
    type: 'Blog',
    text: 'We just got back from a trip to Maui, and we had a great time...',
    image: images[0],
  },
  {
    title: 'Arctic Adventures',
    type: 'Blog',
    text:
      'Last month we took a trek to the Arctic Circle. The isolation was just what we needed after...',
    image: images[1],
  },
  {
    title: 'Frolicking in the Faroe Islands',
    type: 'Blog',
    text:
      'The Faroe Islands are a North Atlantic archipelago located 320 kilometres (200 mi) north-northwest of Scotland...',
    image: images[2],
  },
];

// Some fake products
export const products = [
  {
    name: 'Groceries',
    id: 'groceries',
    items: [{ name: 'Apples' }, { name: 'Bananas' }, { name: 'Milk' }, { name: 'Ice Cream' }],
  },
  {
    name: 'Hardware Store',
    id: 'hardware',
    items: [
      { name: 'Circular Saw' },
      { name: 'Tack Cloth' },
      { name: 'Drywall' },
      { name: 'Router' },
    ],
  },
  { name: 'Work', id: 'work', items: [{ name: 'TPS Report' }, { name: 'Set up email' }] },
  { name: 'Reminders', id: 'reminders' },
];
