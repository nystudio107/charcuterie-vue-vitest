import {getAllItems, getInventoryItem} from '../js/charcuterie-inventory';
import {it, expect, expectTypeOf, describe} from 'vitest';

describe('charcuterie-inventory.ts', () => {
  it('should return some inventory items', () => {
    const items = getAllItems();
    expect(items.length).greaterThan(0);
  });

  it('should return an array of nothing but CharcuterieItems', () => {
    const items = getAllItems();
    items.forEach((item: CharcuterieItem) => {
      expectTypeOf(item).toEqualTypeOf<CharcuterieItem>();
    })
  });

  it('should have an "olives" item', () => {
    const olives = getInventoryItem('olives');
    expect(typeof olives !== 'undefined').toBe(true);
    expectTypeOf(olives).toEqualTypeOf<CharcuterieItem>();
    expect(olives.name).eq('olives');
  });
});
