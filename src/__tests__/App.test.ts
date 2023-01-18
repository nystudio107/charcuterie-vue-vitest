import {mount} from '@vue/test-utils';
import {describe, it, expect} from 'vitest';
import {kebabCase} from "@/js/utils";
import App from '@/vue/App.vue';

describe('App.vue', () => {
  it('should have <div> element with the "row" class', () => {
    const wrapper = mount(App, {
    });
    const columns = wrapper.findAll('div.row');
    expect(columns.length).toBe(1);
  });

  it('should have <div> elements with the "column" class', () => {
    const wrapper = mount(App, {
    });
    const columns = wrapper.findAll('div.column');
    expect(columns.length).toBe(2);
  });

  it('the first column should have a <h1> with the title "Charcuterie Board"', () => {
    const wrapper = mount(App, {
    });
    const columns = wrapper.findAll('div.column');
    const header = columns[0].find('h1');
    expect(header.text()).toBe('Charcuterie Board');
  });

  it('the second column should have a <h1> with the title "Inventory"', () => {
    const wrapper = mount(App, {
    });
    const columns = wrapper.findAll('div.column');
    const header = columns[1].find('h1');
    expect(header.text()).toBe('Inventory');
  });

  it('should have the following components: <CharcuterieBoardLogo>, <CharcuterieBoard> & <CharcuterieInventory>', () => {
    const wrapper = mount(App, {
      shallow: true
    });
    const components = ['CharcuterieBoardLogo', 'CharcuterieBoard', 'CharcuterieInventory'];
    components.forEach((name) => {
      const component = wrapper.find(kebabCase(name) + '-stub');
      expect(component.exists()).toBe(true);
    });
  });
});
