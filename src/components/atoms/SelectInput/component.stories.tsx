import type { Meta, StoryObj } from "@storybook/react";

import SelectInput from "./component";
import { useState } from "react";

const meta: Meta<typeof SelectInput> = {
  title: "atoms/SelectInput",
  component: SelectInput,
};
export default meta;
type Story = StoryObj<typeof SelectInput>;

export const base: Story = {
  args: {
    label: "Select input",
    items: [
      { value: "first", title: "First item" },
      { value: "second", title: "Second item" },
      { value: "third", title: "Third item" },
    ],
  },
  render: (args) => {
    const [value, setValue] = useState("first");

    return (
      <div>
        <SelectInput
          {...args}
          value={value}
          onChange={(value) => setValue(value)}
        />
        <p>Selected value: {value}</p>
      </div>
    );
  },
};
