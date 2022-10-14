import { Heading } from "../components/Heading";
import { Text } from "../components/Text";
import { TextInput } from "../components/TextInput";
import { Logo } from "../Logo";
import "../styles/global.css";
import { Envelope, Lock } from "phosphor-react";
import { Checkbox } from "../components/Checkbox";
import { Button } from "../components/Button";
import { FormEvent, useState } from "react";
import axios from "axios";

export function ForgotPassword() {
  const [isUserSignedIn, setIsUserSignedIn] = useState(false);

  async function handleForgotPassword(event: FormEvent) {
    event.preventDefault();

    await axios.post("/forgot-password", {
      email: "valid@email.com",
      password: "senha123",
    });

    setIsUserSignedIn(true);
  }

  return (
    <div className="w-screen h-screen bg-gray-900 flex flex-col items-center justify-center text-gray-100">
      <header className="flex flex-col items-center">
        <Heading size="lg" className="mt-4">
          Ignite lab
        </Heading>
        <Text size="lg" className="text-gray-400 mt-1">
          Insira seu e-mail para trocar a senha!
        </Text>
      </header>
      <form
        onSubmit={handleForgotPassword}
        className="flex gap-4 flex-col items-stretch w-full max-w-sm mt-10"
      >
        {isUserSignedIn && <Text>E-mail enviado!</Text>}
        <label htmlFor="email" className="flex flex-col gap-3">
          <Text className="font-semibold">Endereço de e-mail</Text>
          <TextInput.Root>
            <TextInput.Icon>
              <Envelope />
            </TextInput.Icon>
            <TextInput.Input
              id="email"
              type="email"
              placeholder="Digite seu e-mail"
            />
          </TextInput.Root>
        </label>
        <Button type="submit" className="mt-4">
          Enviar e-mail
        </Button>
      </form>
    </div>
  );
}
