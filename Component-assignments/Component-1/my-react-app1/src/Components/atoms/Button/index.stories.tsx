import type { Meta, StoryObj } from "@storybook/react";
import Button from "./Button/Button";

const meta: Meta<typeof Button> = {
  title: "Atoms/Button",
  component: Button,
};

export default meta;
type Story = StoryObj<typeof Button>;

// Primary Button
export const Primary: Story = {
  args: {
    children: "Primary",
    onClick: () => alert("Primary Button clicked"),
    className: "button-primary",
  },
};

// Disabled Button
export const Disabled: Story = {
  args: {
    children: "Disabled",
    onClick: () => alert("This shouldn't fire"),
    disabled: true,
    className: "button-disabled",
  },
};

// Loading Button
export const Loading: Story = {
  args: {
    children: "Loading...",
    onClick: () => {},
    disabled: true,
    className: "button-loading",
  },
};

//Danger Button
export const Danger: Story = {
  args: {
    children: "Delete",
    onClick: () => alert("Danger Button clicked"),
    className: "button-danger",
  },
};
