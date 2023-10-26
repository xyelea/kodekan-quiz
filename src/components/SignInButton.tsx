"use client";

import { FC } from "react";
import { Button } from "./ui/button";
import { signIn } from "next-auth/react";

interface SignInButtonProps {
  text: string;
}

const SignInButton: FC<SignInButtonProps> = ({ text }: SignInButtonProps) => {
  return (
    <Button
      onClick={() => {
        signIn("google").catch(console.error);
      }}>
      {text}
    </Button>
  );
};

export default SignInButton;
