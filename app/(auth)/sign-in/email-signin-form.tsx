"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { SignInWithEmail } from "@/lib/actions/user-actions";
import { useFormStatus } from "react-dom";

export default function EmailSigninForm() {
  const SignInButton = () => {
    const { pending } = useFormStatus();
    return (
      <Button disabled={pending} className="w-full" variant="default">
        {pending ? "Sending email..." : "Sign in with email verification"}
      </Button>
    );
  };

  return (
    <form action={SignInWithEmail}>
      <div className="space-y-4">
        <div className="space-y-1">
          <Label htmlFor="user_email">Email</Label>
          <Input
            type="email"
            id="user_email"
            name="email"
            placeholder="Enter your email address"
            required
          />
        </div>
        <div className="space-y-2">
          <SignInButton />
        </div>
      </div>
    </form>
  );
}
