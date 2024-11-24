"use client";

import Link from "next/link";
import { useSearchParams } from "next/navigation";
import { useFormState, useFormStatus } from "react-dom";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { signUp } from "@/lib/actions/user-actions";
import { signUpDefaultValues } from "@/lib/constants";
import { useState } from "react";
import { Eye, EyeOff } from "lucide-react";

export default function SignUpForm() {
  const [data, action] = useFormState(signUp, {
    success: false,
    message: "",
  });

  const searchParams = useSearchParams();
  const callbackUrl = searchParams.get("callbackUrl") || "/";

  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const togglePasswordVisibility = () => setShowPassword((prev) => !prev);
  const toggleConfirmPasswordVisibility = () =>
    setShowConfirmPassword((prev) => !prev);

  const SignUpButton = () => {
    const { pending } = useFormStatus();
    return (
      <Button disabled={pending} className="w-full" variant="default">
        {pending ? "Submitting..." : "Sign up"}
      </Button>
    );
  };

  return (
    <form action={action}>
      <input type="hidden" name="callbackUrl" value={callbackUrl} />
      <div className="space-y-4">
        <div>
          <Label htmlFor="name">Name</Label>
          <Input
            id="name"
            name="name"
            placeholder="Enter your full name"
            required
            type="text"
            defaultValue={signUpDefaultValues.name}
          />
        </div>
        <div>
          <Label htmlFor="email">Email</Label>
          <Input
            id="email"
            name="email"
            placeholder="Enter your email address"
            required
            type="email"
            defaultValue={signUpDefaultValues.email}
          />
        </div>
        <div className="relative">
          <Label htmlFor="password">Password</Label>
          <Input
            id="password"
            name="password"
            placeholder="Enter your password"
            required
            type={showPassword ? "text" : "password"}
            defaultValue={signUpDefaultValues.password}
          />
          <button
            type="button"
            onClick={togglePasswordVisibility}
            className="absolute right-2 top-8 text-2xl text-gray-600 dark:text-gray-400 hover:text-gray-800 dark:hover:text-gray-300"
          >
            {showPassword ? <EyeOff size={22} /> : <Eye size={22} />}
          </button>
        </div>
        <div className="relative">
          <Label htmlFor="confirmPassword">Confirm Password</Label>
          <Input
            id="confirmPassword"
            name="confirmPassword"
            placeholder="Repeat your password"
            required
            type={showConfirmPassword ? "text" : "password"}
            defaultValue={signUpDefaultValues.confirmPassword}
          />
          <button
            type="button"
            onClick={toggleConfirmPasswordVisibility}
            className="absolute right-2 top-8 text-2xl text-gray-600 dark:text-gray-400 hover:text-gray-800 dark:hover:text-gray-300"
          >
            {showConfirmPassword ? <EyeOff size={22} /> : <Eye size={22} />}
          </button>
        </div>

        <div className="pt-2">
          <SignUpButton />
        </div>

        {!data.success && (
          <div className="text-center text-destructive">{data.message}</div>
        )}

        <div className="text-sm text-center text-muted-foreground">
          Already have an account?{" "}
          <Link
            href={`/sign-in?callbackUrl=${callbackUrl}`}
            target="_self"
            className="link hover:text-gray-800"
          >
            Sign in
          </Link>
        </div>
      </div>
    </form>
  );
}
