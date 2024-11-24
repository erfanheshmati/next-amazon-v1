"use client";

import { useSearchParams } from "next/navigation";
import { useFormState, useFormStatus } from "react-dom";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { signInWithCredentials } from "@/lib/actions/user-actions";
import { signInDefaultValues } from "@/lib/constants";
import Link from "next/link";
import { useState } from "react";
import { Eye, EyeOff } from "lucide-react";

export default function CredentialsSignInForm() {
  const [data, action] = useFormState(signInWithCredentials, {
    message: "",
    success: false,
  });

  const searchParams = useSearchParams();
  const callbackUrl = searchParams.get("callbackUrl") || "/";

  const [showPassword, setShowPassword] = useState(false);
  const togglePasswordVisibility = () => setShowPassword((prev) => !prev);

  const SignInButton = () => {
    const { pending } = useFormStatus();
    return (
      <Button disabled={pending} className="w-full" variant="default">
        {pending ? "Submitting..." : "Sign in with credentials"}
      </Button>
    );
  };

  return (
    <form action={action}>
      <input type="hidden" name="callbackUrl" value={callbackUrl} />
      <div className="space-y-4">
        <div className="space-y-1">
          <Label htmlFor="email">Email</Label>
          <Input
            id="email"
            name="email"
            placeholder="Enter your email address"
            type="email"
            defaultValue={signInDefaultValues.email}
            autoComplete="off"
            required
          />
        </div>
        <div className="relative">
          <div className="space-y-1">
            <Label htmlFor="password">Password</Label>
            <Input
              id="password"
              name="password"
              placeholder="Enter your password"
              type={showPassword ? "text" : "password"}
              defaultValue={signInDefaultValues.password}
              autoComplete="off"
              required
            />
            <button
              type="button"
              onClick={togglePasswordVisibility}
              className="absolute inset-y-1/2 right-2 text-2xl text-gray-600 dark:text-gray-400 hover:text-gray-800 dark:hover:text-gray-300"
            >
              {showPassword ? <EyeOff size={22} /> : <Eye size={22} />}
            </button>
          </div>
        </div>

        <div className="pt-2">
          <SignInButton />
        </div>

        {data && !data.success && (
          <div className="text-center text-destructive">{data.message}</div>
        )}
        {!data && (
          <div className="text-center text-destructive">
            Unknown error happened.{" "}
            <Button onClick={() => window.location.reload()}>
              Please reload
            </Button>
          </div>
        )}

        <div className="text-sm text-center text-muted-foreground">
          Don&apos;t have an account?{" "}
          <Link
            href={`/sign-up?callbackUrl=${encodeURIComponent(callbackUrl)}`}
            target="_self"
            className="link hover:text-gray-800"
          >
            Sign up
          </Link>
        </div>
      </div>
    </form>
  );
}
