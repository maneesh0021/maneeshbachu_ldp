import type { Meta, StoryObj } from "@storybook/react";
import { useState } from "react";
import Input from ".";

const meta: Meta<typeof Input> = {
  title: "Atoms/Input",
  component: Input,
};

export default meta;

type Story = StoryObj<typeof Input>;

// Default text input
export const Default: Story = {
  render: function DefaultInputStory() {
    const [value, setValue] = useState("");
    return (
      <Input
        type="text"
        placeholder="Enter your name"
        value={value}
        onChange={(e) => setValue(e.target.value)}
      />
    );
  },
};

// Password input
export const Password: Story = {
  render: function PasswordInputStory() {
    const [password, setPassword] = useState("");
    return (
      <Input
        type="password"
        placeholder="Enter your password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
    );
  },
};

// Disabled input
export const Disabled: Story = {
  render: function DisabledInputStory() {
    return (
      <Input
        type="text"
        placeholder="Disabled input"
        value="Can't type here"
        onChange={() => {}}
      />
    );
  },
};

// With pre-filled value
export const Prefilled: Story = {
  render: function PrefilledInputStory() {
    const [value, setValue] = useState("John Doe");
    return (
      <Input
        type="text"
        placeholder="Enter your name"
        value={value}
        onChange={(e) => setValue(e.target.value)}
      />
    );
  },
};
