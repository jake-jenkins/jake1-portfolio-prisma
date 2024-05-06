import { H1 } from "@/app/components/Typography";
import Link from "next/link";

export default function SentPage() {
  return (
    <div className="my-16 md:my-32 text-center">
      <H1>Thanks, your message has been sent.</H1>
      <Link
        href="/"
        className="bg-indigo-700 py-2 px-4 rounded-xl inline-block my-8"
      >
        Go Home
      </Link>
    </div>
  );
}
