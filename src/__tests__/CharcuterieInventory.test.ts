import {mount} from "@vue/test-utils";
import {describe, it, expect} from "vitest";
import CharcuterieInventory from "@/vue/components/CharcuterieInventory.vue";
import {kebabCase} from "@/js/utils";

describe('App.vu', () => {
  it('should have <div> element with the "inventory" class', () => {
    const wrapper = mount(CharcuterieInventory, {
    });
    const inventory = wrapper.findAll('div.inventory');
    expect(inventory.length).toBe(1);
  });

  it('should have at lease one: <CharcuterieItem>, component', () => {
    const wrapper = mount(CharcuterieInventory, {
      shallow: true
    });
    const component = wrapper.find(kebabCase('CharcuterieItem') + '-stub');
    expect(component.exists()).toBe(true);
  });
});

