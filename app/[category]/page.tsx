import { getCategories, getProjects } from "@/actions";
import Hero from "@/app/components/Hero";
import ProjectGrid from "../components/ProjectGrid";
import Breadcrumb from "../components/Breadcrumb";
import { Category } from "@/types";

export async function generateStaticParams() {
  const pages = await getCategories();
  return pages?.map((category: Category) => ({ slug: [category.slug] })) || [];
}

export async function generateMetadata({
  params,
}: {
  params: { category: Category };
}) {
  const category = await getCategories(params.category);
  return {
    title: category.name + " | Jake1.net",
  };
}

export default async function Page({
  params,
}: {
  params: { category: string };
}) {
  const category = await getCategories(params.category)
  const projects = await getProjects(params.category)

  return (
    <>
      <Breadcrumb />
      <Hero title={category.name} />
      <ProjectGrid projects={projects} />
    </>
  );
}
