import {it, expect, expectTypeOf, describe} from 'vitest';
import {getInventory, getInventoryItem} from '@/js/charcuterie-inventory';

describe('charcuterie-inventory.ts', () => {
  it('should return some inventory items', () => {
    const items = getInventory();
    expect(items.length).greaterThan(0);
  });

  it('should return an array of nothing but CharcuterieItems', () => {
    const items = getInventory();
    items.forEach((item: CharcuterieItem) => {
      expectTypeOf(item).toEqualTypeOf<CharcuterieItem>();
    })
  });

  it('should have an "olives" item', () => {
    const olives = getInventoryItem('olives');
    expect(typeof olives !== 'undefined').toBe(true);
  });
});
