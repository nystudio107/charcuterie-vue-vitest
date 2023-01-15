export enum CharcuterieItemType {
  Cheese,
  Meat,
  Fruit,
}

const charcuterieBoard: CharcuterieItem[] = [];

export function getAllItems() {
  return charcuterieBoard;
}

export function getItemsOfType(type: CharcuterieItemType) {
  return charcuterieBoard.filter((value:CharcuterieItem) => value.type === type)
}

export function addCharcuterieItem(item: CharcuterieItem) {
  charcuterieBoard.push(item);
}
