import Hero from "@/app/components/Hero";
import ProjectGrid from "@/app/components/ProjectGrid";
import { getTag } from "@/lib/actions";
import { Tag } from "@/lib/types";

export const revalidate = 3600;

export async function generateStaticParams() {
  const tags: Tag[] = await getTag();
  return tags.map((tag: Tag) => ({ slug: [tag.slug] }));
}

export async function generateMetadata({
  params,
}: {
  params: { tag: string };
}) {
  const tag: Tag[] = await getTag(params.tag);
  return {
    title: tag[0].title + " | Jake1.net",
  };
}

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
