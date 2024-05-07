import type { Tag } from "@/lib/types";
import Link from "next/link";

export async function TagItem({ tag }: { tag: Tag }) {
  return (
    <Link href={`/tech/${tag.slug}`} className="mr-6">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="fill-white h-4 inline-block mr-1"
        viewBox="0 0 512 512"
      >
        <path d="M467 45.2A44.45 44.45 0 00435.29 32H312.36a30.63 30.63 0 00-21.52 8.89L45.09 286.59a44.82 44.82 0 000 63.32l117 117a44.83 44.83 0 0063.34 0l245.65-245.6A30.6 30.6 0 00480 199.8v-123a44.24 44.24 0 00-13-31.6zM384 160a32 32 0 1132-32 32 32 0 01-32 32z" />
      </svg>
      {tag.title}
    </Link>
  );
}
