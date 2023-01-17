import {CharcuterieItemType} from "../@types/charcuterie-enums.d.ts";

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

export function getAllItems() {
  return charcuterieInventory;
}

export function getInventoryItem(name: string): CharcuterieItem {
  return charcuterieInventory.find((value: CharcuterieItem) => value.name === name);
}
