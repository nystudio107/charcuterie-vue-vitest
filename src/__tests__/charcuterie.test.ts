import {getAllItems, getItemsOfType, addCharcuterieItem, CharcuterieItemType} from '../index';
import {test, expect, expectTypeOf} from 'vitest';

test('Charcuterie suite', () => {
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
    expectTypeOf(value.type).toEqualTypeOf<CharcuterieItemType.Fruit>();
  })
  expect(getAllItems()).toMatchSnapshot();
})
