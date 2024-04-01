import type { Meta, StoryObj } from "@storybook/react";

import LoadingIndicator from "./component";

const meta: Meta<typeof LoadingIndicator> = {
  title: "atoms/LoadingIndicator",
  component: LoadingIndicator,
};
export default meta;
type Story = StoryObj<typeof LoadingIndicator>;

export const base: Story = {
  args: {},
};
