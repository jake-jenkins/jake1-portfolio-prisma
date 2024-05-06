import Hero from "@/app/components/Hero";
import ProjectGrid from "@/app/components/ProjectGrid";
import { getTag } from "@/lib/actions";
import { Tag } from "@/lib/types";

export const revalidate = 3600;

export default async function Page({ params }: { params: { tag: string } }) {
  const data: Tag[] = await getTag(params.tag);
  const tag = data[0]

  return (
    <>
      <Hero title={tag.title} />
      <ProjectGrid projects={tag.projects} />
    </>
  );
}
