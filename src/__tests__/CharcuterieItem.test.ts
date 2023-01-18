import {mount} from '@vue/test-utils';
import {describe, it, expect} from 'vitest';
import CharcuterieItem from '@/vue/components/CharcuterieItem.vue';
import {getInventoryItem} from "@/js/charcuterie-inventory";

describe('CharcuterieItem.vue', () => {

  it('should have an <img> tag with the class "icon" & `src` attribute set', () => {
    const wrapper = mount(CharcuterieItem, {
      props: {
        item: getInventoryItem('olives')
      },
    });
    const img =wrapper.find('img.icon');

    expect(img.exists()).toBe(true);
    expect(img.attributes('src')).toBeDefined();
  });

  it('should have a <span> tag with the class "name" & have the correct text in it', () => {
    const wrapper = mount(CharcuterieItem, {
      props: {
        item: getInventoryItem('olives')
      },
    });
    const span =wrapper.find('span.name');

    expect(span.exists()).toBe(true);
    expect(span.text()).eq('olives');
  });
});
