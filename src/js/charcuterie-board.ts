import {CharcuterieItemType} from "../@types/charcuterie-enums";

const charcuterieBoard: CharcuterieItem[] = [];

export function getAllItems() {
  return charcuterieBoard;
}

export function clearBoard() {
  charcuterieBoard = [];
}
export function getItemsOfType(type: CharcuterieItemType): CharcuterieItem[] {
  return charcuterieBoard.filter((value: CharcuterieItem) => value.type === type)
}

export function addCharcuterieItem(item: CharcuterieItem|undefined) {
  if (typeof item !== 'undefined') {
    charcuterieBoard.push(item);
  }
}
