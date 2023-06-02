import type { Meta, StoryObj } from "@storybook/react";
import { HelloWorld } from ".";

type T = typeof HelloWorld;

export default {
  component: HelloWorld,
  tags: ["autodocs"],
} satisfies Meta<T>;

export const Default: StoryObj<T> = {};
