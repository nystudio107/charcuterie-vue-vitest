import {CharcuterieItemType} from "../@types/charcuterie-enums";

const charcuterieBoard: CharcuterieItem[] = [];

export function getAllItems() {
  return charcuterieBoard;
}

export function clearAllItems() {
  charcuterieBoard.length = 0;
}
export function getItemsOfType(type: CharcuterieItemType): CharcuterieItem[] {
  return charcuterieBoard.filter((value: CharcuterieItem) => value.type === type)
}

export function addItem(item: CharcuterieItem|undefined) {
  if (typeof item !== 'undefined') {
    charcuterieBoard.push(item);
  }
}
