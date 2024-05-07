import { getCategory } from "@/lib/actions";
import Hero from "@/app/components/Hero";
import ProjectGrid from "../components/ProjectGrid";
import { Category } from "@/lib/types";
import Breadcrumb from "../components/Breadcrumb";

export const revalidate = 3600;

export async function generateStaticParams() {
  const pages = await getCategory();
  return pages.map((category: Category) => ({ slug: [category.slug] }));
}

export async function generateMetadata({
  params,
}: {
  params: { category: any };
}) {
  const category: Category[] = await getCategory(params.category);
  return {
    title: category[0].title + " | Jake1.net",
  };
}

export default async function Page({
  params,
}: {
  params: { category: string };
}) {
  const data: Category[] = await getCategory(params.category);
  const category = data[0];

  return (
    <>
      <Breadcrumb />
      <Hero title={category.title} />
      <ProjectGrid projects={category.projects} />
    </>
  );
}
