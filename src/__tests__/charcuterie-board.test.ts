import {CharcuterieItemType} from "../@types/charcuterie-enums";
import {clearAllItems, getAllItems, getItemsOfType, addItem} from '../js/charcuterie-board';
import {getInventoryItem} from "../js/charcuterie-inventory";
import {it, expect, describe} from 'vitest';

describe("charcuterie-board.ts", () => {
  it('should add items to the charcuterie board', () => {
    clearAllItems();
    addItem(getInventoryItem('olives'));
    addItem(getInventoryItem('salami'));
    expect(getAllItems()).toMatchSnapshot();
  });

  it('should handle adding undefined items', () => {
    clearAllItems();
    addItem(undefined);
    expect(getAllItems()).toMatchSnapshot();
  });

  it ('should return the proper types of items', () => {
    clearAllItems();
    addItem(getInventoryItem('olives'));
    addItem(getInventoryItem('salami'));
    const fruits = getItemsOfType(CharcuterieItemType.Fruit);
    fruits.forEach((value: CharcuterieItem) => {
      expect(value.type).eq(CharcuterieItemType.Fruit);
    });
  });
});
