import Link from "next/link";

export default function CategoryCard({ category }: { category: any }) {
  return (
    <Link
      href={category.slug}
      className="dark:hover:border-white dark:bg-slate-800 bg-slate-300 bg-opacity-40 rounded-2xl border-slate-400 border px-16 py-16 text-center text-3xl font-extrabold"
    >
      {category.title}
    </Link>
  );
}
