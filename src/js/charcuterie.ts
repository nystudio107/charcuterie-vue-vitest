import {CharcuterieItemType} from "../@types/charcuterie-enums.d.ts";

const charcuterieBoard: CharcuterieItem[] = [];

export function getAllItems() {
  return charcuterieBoard;
}

export function getItemsOfType(type: CharcuterieItemType) {
  return charcuterieBoard.filter((value: CharcuterieItem) => value.type === type)
}

export function addCharcuterieItem(item: CharcuterieItem) {
  charcuterieBoard.push(item);
}
