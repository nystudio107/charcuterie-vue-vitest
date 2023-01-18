import {CharcuterieItemType} from '@/@types/charcuterie-enums';

const charcuterieInventory: CharcuterieItem[]  = [
  {
    name: 'graham',
    type: CharcuterieItemType.Cracker
  },
  {
    name: 'cream',
    type: CharcuterieItemType.Cracker
  },
  {
    name: 'matzo',
    type: CharcuterieItemType.Cracker
  },
  {
    name: 'graham',
    type: CharcuterieItemType.Cracker
  },
  {
    name: 'oatcake',
    type: CharcuterieItemType.Cracker,
  },
  {
    name: 'rice',
    type: CharcuterieItemType.Cracker
  },
  {
    name: 'salami',
    type: CharcuterieItemType.Meat,
  },
  {
    name: 'soppressata',
    type: CharcuterieItemType.Meat,
  },
  {
    name: 'calabrese',
    type: CharcuterieItemType.Meat,
  },
  {
    name: 'mortadella',
    type: CharcuterieItemType.Meat,
  },
  {
    name: 'prosciutto',
    type: CharcuterieItemType.Meat,
  },
  {
    name: 'chorizo',
    type: CharcuterieItemType.Meat,
  },
  {
    name: 'capicola',
    type: CharcuterieItemType.Meat,
  },
  {
    name: 'cheddar',
    type: CharcuterieItemType.Cheese,
  },
  {
    name: 'roquefort',
    type: CharcuterieItemType.Cheese,
  },
  {
    name: 'swiss',
    type: CharcuterieItemType.Cheese,
  },
  {
    name: 'pecorino-romano',
    type: CharcuterieItemType.Cheese,
  },
  {
    name: 'parmigiano-reggiano',
    type: CharcuterieItemType.Cheese,
  },
  {
    name: 'gruyere',
    type: CharcuterieItemType.Cheese,
  },
  {
    name: 'provolone',
    type: CharcuterieItemType.Cheese,
  },
  {
    name: 'peanuts',
    type: CharcuterieItemType.Nut,
  },
  {
    name: 'almond',
    type: CharcuterieItemType.Nut,
  },
  {
    name: 'cashew',
    type: CharcuterieItemType.Nut,
  },
  {
    name: 'walnut',
    type: CharcuterieItemType.Nut,
  },
  {
    name: 'brazil',
    type: CharcuterieItemType.Nut,
  },
  {
    name: 'pistachio',
    type: CharcuterieItemType.Nut,
  },
  {
    name: 'peanuts',
    type: CharcuterieItemType.Nut,
  },
  {
    name: 'apple',
    type: CharcuterieItemType.Fruit,
  },
  {
    name: 'olives',
    type: CharcuterieItemType.Fruit,
  },
  {
    name: 'strawberry',
    type: CharcuterieItemType.Fruit,
  },
  {
    name: 'cherry',
    type: CharcuterieItemType.Fruit,
  },
  {
    name: 'blackberry',
    type: CharcuterieItemType.Fruit,
  },
  {
    name: 'raspberry',
    type: CharcuterieItemType.Fruit,
  },
  {
    name: 'pear',
    type: CharcuterieItemType.Fruit,
  },
  {
    name: 'carrot',
    type: CharcuterieItemType.Vegetable,
  },
];

export function getInventory() {
  return charcuterieInventory;
}

export function getInventoryItem(name: string): CharcuterieItem|undefined {
  return charcuterieInventory.find((value: CharcuterieItem) => value.name === name);
}
