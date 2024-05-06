"use client";

import { useFormStatus } from "react-dom";

export function SubmitButton() {
  const { pending } = useFormStatus();

  return (
    <button
      type="submit"
      aria-disabled={pending}
      disabled={pending}
      className="bg-indigo-700 py-2 px-8 block"
    >
      {pending ? "Sending..." : "Send"}
    </button>
  );
}
