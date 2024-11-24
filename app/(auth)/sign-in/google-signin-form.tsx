"use client";

import { Button } from "@/components/ui/button";
import { SignInWithGoogle } from "@/lib/actions/user-actions";
import { useFormStatus } from "react-dom";

export default function GoogleSignInForm() {
  const SignInButton = () => {
    const { pending } = useFormStatus();
    
    return (
      <Button disabled={pending} className="w-full" variant="default">
        {pending ? "Redirecting to google..." : "Sign in with google account"}
      </Button>
    );
  };

  return (
    <form action={SignInWithGoogle}>
      <SignInButton />
    </form>
  );
}
