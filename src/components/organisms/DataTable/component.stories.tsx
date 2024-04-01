import type { Meta, StoryObj } from "@storybook/react";

import DataTable from "./component";

const meta: Meta<typeof DataTable> = {
  title: "organisms/DataTable",
  component: DataTable,
};
export default meta;
type Story = StoryObj<typeof DataTable>;

export const base: Story = {
  args: {
    title: {
      main: "Title",
      data: ["Field one", "Field two"],
    },
    rows: [
      { title: "First item", content: ["First value", "Second value"] },
      { title: "Second item", content: ["First value", "Second value"] },
    ],
  },
};
