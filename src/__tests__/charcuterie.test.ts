import {CharcuterieItemType} from "../@types/charcuterie-enums.d.ts";
import {getAllItems, getItemsOfType, addCharcuterieItem} from '../js/charcuterie';
import {getInventoryItem} from "../js/charcuterie-inventory";
import {it, expect, expectTypeOf, describe} from 'vitest';

describe("charcuterie.ts", () => {
  it('should add items to the charcuterie board', () => {
    addCharcuterieItem(getInventoryItem('olives'));
    addCharcuterieItem(getInventoryItem('salami'));
    expect(getAllItems()).toMatchSnapshot();
  });

  it ('should return the proper types of items', () => {
    addCharcuterieItem(getInventoryItem('olives'));
    addCharcuterieItem(getInventoryItem('salami'));
    const fruits = getItemsOfType(CharcuterieItemType.Fruit);
    fruits.forEach((value: CharcuterieItem) => {
      expectTypeOf(value.type).toEqualTypeOf(CharcuterieItemType.Fruit);
    });
  });
});
