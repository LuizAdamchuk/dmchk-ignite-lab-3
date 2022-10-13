import { Meta, StoryObj } from "@storybook/react";
import { Text, TextProps } from "./Text";

export default {
  title: "Components/Text",
  component: Text,
  args: {
    children: "Common Text",
  },
  argTypes: {
    size: {
      options: ["sm", "md", "lg"],
      control: {
        type: "inline-radio",
      },
    },
  },
} as Meta<TextProps>;

export const Default: StoryObj<TextProps> = {};
export const Small: StoryObj<TextProps> = {
  args: { size: "sm" },
};
export const Large: StoryObj<TextProps> = {
  args: { size: "lg" },
};
// Dessa maneira se altera a tag do component, podendo customizar qual tag desejar
export const CustomComponent: StoryObj<TextProps> = {
  args: {
    asChild: true,
    children: <p>Text with P</p>,
  },
  argTypes: {
    children: {
      table: {
        disable: true,
      },
    },
  },
};
