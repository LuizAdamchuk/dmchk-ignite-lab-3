import { Meta, StoryObj } from "@storybook/react";
import { SignUp } from "./SignUp";
import { within, userEvent, waitFor } from "@storybook/testing-library";
import { expect } from "@storybook/jest";
import { rest } from "msw";

export default {
  title: "Pages/SignUp",
  component: SignUp,
  args: {},
  argTypes: {},
  parameters: {
    msw: {
      handlers: [
        rest.post("/create", (req, res, ctx) => {
          return res(
            ctx.json({
              message: "Conta criada!",
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
    userEvent.type(canvas.getByPlaceholderText("**********"), "senha123");

    userEvent.type(
      canvas.getByPlaceholderText("Digite seu telefone"),
      "43988776655"
    );

    userEvent.click(canvas.getByRole("checkbox"));
    userEvent.click(canvas.getByRole("button"));

    await waitFor(() => {
      return expect(canvas.getByText("Conta criada!")).toBeInTheDocument();
    });
  },
};
