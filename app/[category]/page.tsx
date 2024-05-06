import { getCategory } from "@/lib/actions";
import Hero from "@/app/components/Hero";
import ProjectGrid from "../components/ProjectGrid";
import { Category } from "@/lib/types";
import Breadcrumb from "../components/Breadcrumb";

export const revalidate = 3600;

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
