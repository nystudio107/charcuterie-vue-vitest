import {CharcuterieItemType} from '@/@types/charcuterie-enums';

const charcuterieInventory: CharcuterieItem[]  = [
  {
    name: 'salami',
    type: CharcuterieItemType.Meat,
    calories: 200,
  },
  {
    name: 'olives',
    type: CharcuterieItemType.Fruit,
    calories: 100
  }
];

export function getInventory() {
  return charcuterieInventory;
}

export function getInventoryItem(name: string): CharcuterieItem|undefined {
  return charcuterieInventory.find((value: CharcuterieItem) => value.name === name);
}
