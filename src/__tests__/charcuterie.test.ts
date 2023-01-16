import {getAllItems, getItemsOfType, addCharcuterieItem, CharcuterieItemType} from '../js/charcuterie';
import {it, expect, expectTypeOf, describe} from 'vitest';

describe("charcuterie.ts", () => {
  it('should add items to the charcuterie board', () => {
    addCharcuterieItem({
      name: 'olives',
      type: CharcuterieItemType.Fruit,
      calories: 100
    });
    addCharcuterieItem({
      name: 'salami',
      type: CharcuterieItemType.Meat,
      calories: 200
    });
    expect(getAllItems()).toMatchSnapshot();
  });

  it ('should return the proper types of items', () => {
    addCharcuterieItem({
      name: 'olives',
      type: CharcuterieItemType.Fruit,
      calories: 100
    });
    addCharcuterieItem({
      name: 'salami',
      type: CharcuterieItemType.Meat,
      calories: 200
    });

    const fruits = getItemsOfType(CharcuterieItemType.Fruit);
    fruits.forEach((value: CharcuterieItem) => {
      expectTypeOf(value.type).toEqualTypeOf(CharcuterieItemType.Fruit);
    });
  });
});
