import { Heading } from "../components/Heading";
import { Text } from "../components/Text";
import { TextInput } from "../components/TextInput";
import { Logo } from "../Logo";
import "../styles/global.css";
import { Envelope, Lock, Phone } from "phosphor-react";
import { Checkbox } from "../components/Checkbox";
import { Button } from "../components/Button";
import { FormEvent, useState } from "react";
import axios from "axios";

export function SignUp() {
  const [isUserSignedIn, setIsUserSignedIn] = useState(false);

  async function handleSignUp(event: FormEvent) {
    event.preventDefault();

    await axios.post("/create", {
      email: "valid@email.com",
      password: "senha123",
      phone: 1122224444,
      acceptTerms: true,
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
          Crie sua conta!
        </Text>
      </header>
      <form
        onSubmit={handleSignUp}
        className="flex gap-4 flex-col items-stretch w-full max-w-sm mt-10"
      >
        {isUserSignedIn && <Text>Conta criada!</Text>}
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
        <label htmlFor="phone" className="flex flex-col gap-3">
          <Text className="font-semibold">Telefone celular</Text>
          <TextInput.Root>
            <TextInput.Icon>
              <Phone />
            </TextInput.Icon>
            <TextInput.Input
              id="phone"
              type="tel"
              placeholder="Digite seu telefone"
            />
          </TextInput.Root>
        </label>
        <label htmlFor="password" className="flex flex-col gap-3">
          <Text className="font-semibold">Sua senha</Text>
          <TextInput.Root>
            <TextInput.Icon>
              <Lock />
            </TextInput.Icon>
            <TextInput.Input
              id="password"
              type="password"
              placeholder="**********"
            />
          </TextInput.Root>
        </label>
        <label htmlFor="acceptTerms" className="flex items-center gap-2">
          <Checkbox id="acceptTerms" />
          <Text size="sm" className="text-gray-200">
            Aceito os termos de uso!
          </Text>
        </label>
        <Button type="submit" className="mt-4">
          Criar conta
        </Button>
      </form>
    </div>
  );
}
