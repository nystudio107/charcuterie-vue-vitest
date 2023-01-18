import {it, expect, expectTypeOf, describe} from 'vitest';
import {kebabCase} from "@/js/utils";

describe('utils.ts', () => {
  it('should properly kebab-case passed in strings', () => {
    expect(kebabCase('RyansGoBag')).eq('ryans-go-bag');
  });
});
