import {mount} from "@vue/test-utils";
import CharcuterieBoardLogo from "../vue/components/CharcuterieBoardLogo.vue";
import {describe, it, expect} from "vitest";

describe("CharcuterieBoardLogo.vue", () => {

  it("should have an <a> tag", () => {
    const wrapper = mount(CharcuterieBoardLogo, {
    });
    const a = wrapper.find('a');

    expect(a.exists()).toBe(true);
    expect(a.attributes('href')).toBeDefined();
  });

  it("should have an <img> tag inside an <a> tag", () => {
    const wrapper = mount(CharcuterieBoardLogo, {
    });
    const a = wrapper.find('a');
    const img = a.find('img');

    expect(img.exists()).toBe(true);
    expect(img.attributes('src')).toBeDefined();
  });
});
