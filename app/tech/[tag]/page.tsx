import Hero from "@/app/components/Hero";
import ProjectGrid from "@/app/components/ProjectGrid";
import { getProjects, getTag, getTags } from "@/actions";

export async function generateStaticParams() {
  const tags = await getTags();
  return tags.map((tag: any) => ({ slug: [tag.slug] })) || [];
}

export async function generateMetadata({
  params,
}: {
  params: { tag: string };
}) {
  const tagObj = await getTag(params.tag);
  return {
    title: tagObj.name + " | Jake1.net",
  };
}

export default async function Page({ params }: { params: { tag: string } }) {
  const tagObj = await getTag(params.tag);
  const projects = await getProjects(null, params.tag);

  return (
    <>
      <Hero title={tagObj.name} />
      <ProjectGrid projects={projects} />
    </>
  );
}
