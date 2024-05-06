"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Breadcrumb() {
  const path = usePathname();
  const slugString = path.toString().replaceAll(",", "/");
  const slugArray = slugString.split("/");
  const category = slugArray[1].charAt(0).toUpperCase() + slugArray[1].slice(1);

  return (
    <div className="mb-8 inline-block">
      <Link
        href="/"
        className="inline-block bg-zinc-200 dark:bg-zinc-800 px-4 py-2 border-l"
      >
        Home
      </Link>
      {slugArray.length > 2 ? (
        <Link
          href={`/${slugArray[1]}`}
          className="inline-block bg-zinc-200 dark:bg-zinc-800 px-4 py-2 border-l"
        >
          {category}
        </Link>
      ) : (
        <></>
      )}
    </div>
  );
}
