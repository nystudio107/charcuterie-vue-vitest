import {mount} from '@vue/test-utils';
import {describe, it, expect} from 'vitest';
import CharcuterieBoardLogo from '@/vue/components/CharcuterieBoardLogo.vue';

describe('CharcuterieBoardLogo.vue', () => {

  it('should have an <a> tag', () => {
    const wrapper = mount(CharcuterieBoardLogo, {
    });
    const a = wrapper.find('a');

    expect(a.exists()).toBe(true);
    expect(a.attributes('href')).toBeDefined();
  });

  it('should have an <img> tag with the class "logo" & `src` attribute set inside an <a> tag', () => {
    const wrapper = mount(CharcuterieBoardLogo, {
    });
    const a = wrapper.find('a');
    const img = a.find('img.logo');

    expect(img.exists()).toBe(true);
    expect(img.attributes('src')).toBeDefined();
  });
});
