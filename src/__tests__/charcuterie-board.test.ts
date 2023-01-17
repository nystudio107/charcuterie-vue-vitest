import {CharcuterieItemType} from "../@types/charcuterie-enums";
import {getAllItems, getItemsOfType, addItem} from '../js/charcuterie-board';
import {getInventoryItem} from "../js/charcuterie-inventory";
import {it, expect, describe} from 'vitest';

describe("charcuterie-board.ts", () => {
  it('should add items to the charcuterie board', () => {
    addItem(getInventoryItem('olives'));
    addItem(getInventoryItem('salami'));
    expect(getAllItems()).toMatchSnapshot();
  });

  it('should handle adding undefined items', () => {
    addItem(undefined);
    expect(getAllItems()).toMatchSnapshot();
  });

  it ('should return the proper types of items', () => {
    addItem(getInventoryItem('olives'));
    addItem(getInventoryItem('salami'));
    const fruits = getItemsOfType(CharcuterieItemType.Fruit);
    fruits.forEach((value: CharcuterieItem) => {
      expect(value.type).eq(CharcuterieItemType.Fruit);
    });
  });
});
