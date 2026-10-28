import {
  Show,
  SignInButton,
  SignUpButton,
  UserButton,
} from "@clerk/nextjs";

import { Button } from "@/components/ui/button";
import ModeToggle from "@/components/ModeToggle";

export default function Home() {
  return (
    <main className="flex min-h-screen items-center justify-center bg-red-600 p-6">
      <div className="rounded-2xl bg-white p-10 text-center shadow-xl">
        <h1 className="mb-6 text-4xl font-bold text-blue-600">
          Vibely
        </h1>

        <Show when="signed-out">
          <div className="flex justify-center gap-4">
            <SignInButton mode="modal">
              <Button>Sign In</Button>
            </SignInButton>

            <SignUpButton mode="modal">
              <Button variant="outline">Sign Up</Button>
            </SignUpButton>
          </div>
        </Show>

        <Show when="signed-in">
          <div className="flex flex-col items-center gap-4">
            <p className="text-gray-700">Welcome to Vibely!</p>

            <UserButton />

            <Button>Test Button</Button>
            
            <ModeToggle />
          </div>
        </Show>
      </div>
    </main>
  );
}