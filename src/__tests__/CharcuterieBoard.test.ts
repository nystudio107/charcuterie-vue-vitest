import {mount} from "@vue/test-utils";
import {describe, it, expect} from "vitest";
import CharcuterieBoard from "@/vue/components/CharcuterieBoard.vue";

describe('CharcuterieBoard.vue', () => {
  it('should have <div> element with the "board" class', () => {
    const wrapper = mount(CharcuterieBoard, {
    });
    const inventory = wrapper.findAll('div.board');
    expect(inventory.length).toBe(1);
  });

  it('should populate the board with items', () => {
    const wrapper = mount(CharcuterieBoard, {
      props: {
        min: 1,
        max: 10,
      },
      shallow: true,
    });
    wrapper.vm.populateBoard();
    expect(wrapper.vm.items.length).greaterThanOrEqual(1);
    expect(wrapper.vm.items.length).lessThanOrEqual(10);
  });
});
