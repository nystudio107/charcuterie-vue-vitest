import {mount} from "@vue/test-utils";
import App from "../vue/App.vue";
import {describe, it, expect} from "vitest";

describe("App.vue", () => {

  it("should have the following components: <CharcuterieBoardLogo>, ", () => {
    const wrapper = mount(App, {
      shallow: true
    });
    const component = wrapper.find('charcuterie-board-logo-stub');
    expect(component.exists()).toBe(true);
  });
});
