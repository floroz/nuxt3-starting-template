import { describe, it, expect } from "vitest";
import { mount } from "@vue/test-utils";

import TailwindLink from "./tailwind-link.vue";

describe("TailwindLink", () => {
  it("it renders correctly", () => {
    const wrapper = mount(TailwindLink);

    expect(wrapper.attributes().to).toBe("/_tailwind/");
    expect(wrapper.text()).toBe("Go To Tailwind");
  });
});
