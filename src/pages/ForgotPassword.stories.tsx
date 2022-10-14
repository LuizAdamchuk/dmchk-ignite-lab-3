import { Meta, StoryObj } from "@storybook/react";
import { ForgotPassword } from "./ForgotPassword";
import { within, userEvent, waitFor } from "@storybook/testing-library";
import { expect } from "@storybook/jest";
import { rest } from "msw";

export default {
  title: "Pages/ForgotPassword",
  component: ForgotPassword,
  args: {},
  argTypes: {},
  parameters: {
    msw: {
      handlers: [
        rest.post("/forgot-password", (req, res, ctx) => {
          return res(
            ctx.json({
              message: "E-mail enviado!",
            })
          );
        }),
      ],
    },
  },
} as Meta;

export const Default: StoryObj = {
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);

    userEvent.type(
      canvas.getByPlaceholderText("Digite seu e-mail"),
      "valid@email.com"
    );

    userEvent.click(canvas.getByRole("button"));

    await waitFor(() => {
      return expect(canvas.getByText("E-mail enviado!")).toBeInTheDocument();
    });
  },
};
