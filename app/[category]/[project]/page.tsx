import { getCategory, getProject, getProjects } from "@/lib/actions";
import { Project, Category } from "@/lib/types";
import Image from "next/image";
import { H1, H2, P } from "@/app/components/Typography";
import Breadcrumb from "@/app/components/Breadcrumb";
import { TagItem } from "@/app/components/TagItem";
import type { Tag } from "@/lib/types";

export const revalidate = 3600;

export async function generateStaticParams() {
  const pages = await getProjects();
  return pages.map((project: Project) => ({ slug: [project.slug] }));
}

export async function generateMetadata({
  params,
}: {
  params: { category: string; project: string };
}) {
  const project: Project = await getProject(params.project);
  const category: Category[] = await getCategory(params.category);
  return {
    title: project.title + " - " + category[0].title + " | Jake1.net",
  };
}

export default async function Page({
  params,
}: {
  params: { category: string; project: string };
}) {
  const data: Project = await getProject(params.project);

  return (
    <>
      <Breadcrumb />
      <div className="heroWrapper">
        <Image
          priority
          src={`https://img.jake1.net/${data.imageUrl}`}
          alt={`${data.title} image`}
          className="heroImage"
          fill
        />
      </div>

      <div className="w-full flex-col my-16">
        <div className="max-w-[960px] w-full mx-auto">
          <H1>{data.title}</H1>
          <div className="my-12">
            <H2>Summary</H2>
            <P>{data.summary}</P>
          </div>
          <div className="my-12">
            {data.tags?.map((tag: Tag) => (
              <TagItem key={tag.slug} tag={tag} />
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
